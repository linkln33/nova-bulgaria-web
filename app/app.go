package app

import (
	"encoding/binary"
	"encoding/json"
	"os"

	"github.com/tendermint/tendermint/libs/log"
	dbm "github.com/tendermint/tm-db"
	abci "github.com/tendermint/tendermint/abci/types"
	"github.com/nova-bulgaria/x/identity"
	"github.com/nova-bulgaria/x/token"
	"github.com/nova-bulgaria/x/governance"
	"github.com/nova-bulgaria/x/contribution"
)

const (
	AppName = "nova"
)

var (
	DefaultNodeHome = os.ExpandEnv("$HOME/.nova")
)

// NovaApp implements the ABCI application interface
type NovaApp struct {
	logger log.Logger
	db     dbm.DB
	height int64

	// Keepers
	identityKeeper     identity.Keeper
	tokenKeeper        token.Keeper
	governanceKeeper   governance.Keeper
	contributionKeeper contribution.Keeper
}

// NewNovaApp returns a reference to a new NovaApp
func NewNovaApp(
	logger log.Logger,
	db dbm.DB,
) *NovaApp {
	app := &NovaApp{
		logger: logger,
		db:     db,
		height: 0,
	}

	// Initialize keepers
	app.identityKeeper = identity.NewKeeper(db, logger)
	app.tokenKeeper = token.NewKeeper(db, logger, &app.identityKeeper)
	app.governanceKeeper = governance.NewKeeper(db, logger, &app.identityKeeper, &app.tokenKeeper)
	app.contributionKeeper = contribution.NewKeeper(db, logger, &app.identityKeeper, &app.tokenKeeper)

	return app
}

// Info returns information about the application state
func (app *NovaApp) Info(req abci.RequestInfo) abci.ResponseInfo {
	lastHeight := app.height
	return abci.ResponseInfo{
		Data:             AppName,
		Version:          "1.0.0",
		AppVersion:       1,
		LastBlockHeight:  lastHeight,
		LastBlockAppHash: app.hash(),
	}
}

// hash returns the current application hash
func (app *NovaApp) hash() []byte {
	if app.height == 0 {
		return nil
	}
	h := make([]byte, 8)
	binary.BigEndian.PutUint64(h, uint64(app.height))
	return h
}

// InitChain initializes the blockchain with validators and initial app state
func (app *NovaApp) InitChain(req abci.RequestInitChain) abci.ResponseInitChain {
	app.height = 0
	return abci.ResponseInitChain{}
}

// BeginBlock signals the beginning of a new block
func (app *NovaApp) BeginBlock(req abci.RequestBeginBlock) abci.ResponseBeginBlock {
	app.height = req.Header.Height
	return abci.ResponseBeginBlock{}
}

// DeliverTx processes a transaction
func (app *NovaApp) DeliverTx(req abci.RequestDeliverTx) abci.ResponseDeliverTx {
	var tx map[string]interface{}
	if err := json.Unmarshal(req.Tx, &tx); err != nil {
		return abci.ResponseDeliverTx{Code: 1, Log: "Failed to decode transaction"}
	}

	switch tx["type"] {
	case "register_national":
		publicKey, ok1 := tx["public_key"].(string)
		username, ok2 := tx["username"].(string)
		signature, ok3 := tx["signature"].(string)
		if !ok1 || !ok2 || !ok3 {
			return abci.ResponseDeliverTx{Code: 1, Log: "Invalid registration data"}
		}

		// Verify signature
		message := []byte(publicKey + username)
		valid, err := identity.VerifySignature(message, signature, publicKey)
		if err != nil || !valid {
			return abci.ResponseDeliverTx{Code: 1, Log: "Invalid signature"}
		}

		nationalID := identity.NewNationalID(publicKey, username)
		if err := app.identityKeeper.StoreNationalID(nationalID); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: err.Error()}
		}

		// Create initial token account
		account := token.NewAccount(publicKey)
		if err := app.tokenKeeper.SetAccount(account); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: err.Error()}
		}

		return abci.ResponseDeliverTx{Code: 0, Log: "National registered successfully"}

	case "token_transfer":
		tokenTx := &token.Transaction{}
		txData, err := json.Marshal(tx)
		if err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: "Failed to process transaction data"}
		}
		if err := json.Unmarshal(txData, tokenTx); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: "Invalid transaction format"}
		}

		if err := app.tokenKeeper.Transfer(tokenTx); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: err.Error()}
		}

		return abci.ResponseDeliverTx{Code: 0, Log: "Transfer completed successfully"}

	case "submit_proposal":
		proposal := &governance.Proposal{}
		txData, err := json.Marshal(tx)
		if err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: "Failed to process proposal data"}
		}
		if err := json.Unmarshal(txData, proposal); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: "Invalid proposal format"}
		}

		if err := app.governanceKeeper.SubmitProposal(proposal); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: err.Error()}
		}

		return abci.ResponseDeliverTx{Code: 0, Log: "Proposal submitted successfully"}

	case "vote":
		vote := &governance.Vote{}
		txData, err := json.Marshal(tx)
		if err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: "Failed to process vote data"}
		}
		if err := json.Unmarshal(txData, vote); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: "Invalid vote format"}
		}

		if err := app.governanceKeeper.Vote(vote); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: err.Error()}
		}

		return abci.ResponseDeliverTx{Code: 0, Log: "Vote cast successfully"}

	case "submit_contribution":
		contrib := &contribution.Contribution{}
		txData, err := json.Marshal(tx)
		if err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: "Failed to process contribution data"}
		}
		if err := json.Unmarshal(txData, contrib); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: "Invalid contribution format"}
		}

		if err := app.contributionKeeper.SubmitContribution(contrib); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: err.Error()}
		}

		return abci.ResponseDeliverTx{Code: 0, Log: "Contribution submitted successfully"}

	case "validate_contribution":
		result := &contribution.ValidationResult{}
		txData, err := json.Marshal(tx)
		if err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: "Failed to process validation data"}
		}
		if err := json.Unmarshal(txData, result); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: "Invalid validation format"}
		}

		if err := app.contributionKeeper.ValidateContribution(result); err != nil {
			return abci.ResponseDeliverTx{Code: 1, Log: err.Error()}
		}

		return abci.ResponseDeliverTx{Code: 0, Log: "Contribution validated successfully"}
	}

	return abci.ResponseDeliverTx{Code: 1, Log: "Unknown transaction type"}
}

// EndBlock signals the end of a block
func (app *NovaApp) EndBlock(req abci.RequestEndBlock) abci.ResponseEndBlock {
	return abci.ResponseEndBlock{}
}

// Commit commits the current state
func (app *NovaApp) Commit() abci.ResponseCommit {
	return abci.ResponseCommit{
		Data: app.hash(),
	}
}

// Query handles queries to the application state
func (app *NovaApp) Query(req abci.RequestQuery) abci.ResponseQuery {
	var query map[string]string
	if err := json.Unmarshal(req.Data, &query); err != nil {
		return abci.ResponseQuery{Code: 1, Log: "Failed to decode query"}
	}

	switch query["type"] {
	case "get_national":
		id := query["id"]
		nationalID, err := app.identityKeeper.GetNationalID(id)
		if err != nil {
			return abci.ResponseQuery{Code: 1, Log: err.Error()}
		}

		data, err := json.Marshal(nationalID)
		if err != nil {
			return abci.ResponseQuery{Code: 1, Log: "Failed to encode response"}
		}

		return abci.ResponseQuery{Code: 0, Value: data}

	case "get_balance":
		address := query["address"]
		account, err := app.tokenKeeper.GetAccount(address)
		if err != nil {
			return abci.ResponseQuery{Code: 1, Log: err.Error()}
		}

		data, err := json.Marshal(account)
		if err != nil {
			return abci.ResponseQuery{Code: 1, Log: "Failed to encode response"}
		}

		return abci.ResponseQuery{Code: 0, Value: data}
	}

	return abci.ResponseQuery{Code: 1, Log: "Unknown query type"}
}

// CheckTx validates a transaction
func (app *NovaApp) CheckTx(req abci.RequestCheckTx) abci.ResponseCheckTx {
	var tx map[string]interface{}
	if err := json.Unmarshal(req.Tx, &tx); err != nil {
		return abci.ResponseCheckTx{Code: 1, Log: "Failed to decode transaction"}
	}

	// Validate transaction format
	if tx["type"] == nil {
		return abci.ResponseCheckTx{Code: 1, Log: "Transaction type is required"}
	}

	switch tx["type"] {
	case "register_national":
		if tx["public_key"] == nil || tx["username"] == nil || tx["signature"] == nil {
			return abci.ResponseCheckTx{Code: 1, Log: "Missing required fields"}
		}
		return abci.ResponseCheckTx{Code: 0}

	case "token_transfer":
		tokenTx := &token.Transaction{}
		txData, err := json.Marshal(tx)
		if err != nil {
			return abci.ResponseCheckTx{Code: 1, Log: "Failed to process transaction data"}
		}
		if err := json.Unmarshal(txData, tokenTx); err != nil {
			return abci.ResponseCheckTx{Code: 1, Log: "Invalid transaction format"}
		}

		if !tokenTx.ValidateTransaction() {
			return abci.ResponseCheckTx{Code: 1, Log: "Invalid transaction"}
		}

		return abci.ResponseCheckTx{Code: 0}
	}

	return abci.ResponseCheckTx{Code: 1, Log: "Unknown transaction type"}
}
