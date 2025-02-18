package token

import (
	"encoding/json"
	"fmt"
	"math/big"

	"github.com/tendermint/tendermint/libs/log"
	dbm "github.com/tendermint/tm-db"
	"github.com/nova-bulgaria/x/identity"
)

const (
	AccountPrefix     = "account:"
	TransactionPrefix = "tx:"
)

// Keeper maintains the token state
type Keeper struct {
	db            dbm.DB
	logger        log.Logger
	identityKeeper *identity.Keeper
}

// NewKeeper creates a new token Keeper
func NewKeeper(db dbm.DB, logger log.Logger, identityKeeper *identity.Keeper) Keeper {
	return Keeper{
		db:            db,
		logger:        logger,
		identityKeeper: identityKeeper,
	}
}

// GetAccount retrieves an account from the store
func (k Keeper) GetAccount(address string) (*Account, error) {
	key := []byte(AccountPrefix + address)
	bz, err := k.db.Get(key)
	if err != nil {
		return nil, fmt.Errorf("failed to get account: %w", err)
	}
	if bz == nil {
		return NewAccount(address), nil
	}

	var account Account
	if err := json.Unmarshal(bz, &account); err != nil {
		return nil, fmt.Errorf("failed to unmarshal account: %w", err)
	}

	return &account, nil
}

// SetAccount saves an account to the store
func (k Keeper) SetAccount(account *Account) error {
	bz, err := json.Marshal(account)
	if err != nil {
		return fmt.Errorf("failed to marshal account: %w", err)
	}

	key := []byte(AccountPrefix + account.Address)
	k.db.Set(key, bz)
	return nil
}

// Transfer moves tokens from one account to another
func (k Keeper) Transfer(tx *Transaction) error {
	// Verify sender exists as a national
	_, err := k.identityKeeper.GetNationalID(tx.From)
	if err != nil {
		return fmt.Errorf("sender is not a registered national: %w", err)
	}

	// Get sender account
	fromAcc, err := k.GetAccount(tx.From)
	if err != nil {
		return err
	}

	// Verify nonce
	if tx.Nonce != fromAcc.Nonce {
		return fmt.Errorf("invalid nonce: expected %d, got %d", fromAcc.Nonce, tx.Nonce)
	}

	// Verify balance
	if fromAcc.Balance.Cmp(tx.Amount) < 0 {
		return fmt.Errorf("insufficient balance")
	}

	// Get recipient account
	toAcc, err := k.GetAccount(tx.To)
	if err != nil {
		return err
	}

	// Update balances
	fromAcc.Balance = new(big.Int).Sub(fromAcc.Balance, tx.Amount)
	toAcc.Balance = new(big.Int).Add(toAcc.Balance, tx.Amount)
	fromAcc.Nonce++

	// Save accounts
	if err := k.SetAccount(fromAcc); err != nil {
		return err
	}
	if err := k.SetAccount(toAcc); err != nil {
		return err
	}

	// Store transaction
	txKey := []byte(fmt.Sprintf("%s%s_%d", TransactionPrefix, tx.From, tx.Nonce))
	txData, err := json.Marshal(tx)
	if err != nil {
		return fmt.Errorf("failed to marshal transaction: %w", err)
	}
	k.db.Set(txKey, txData)

	k.logger.Info("Transfer completed", 
		"from", tx.From, 
		"to", tx.To, 
		"amount", tx.Amount.String(),
		"nonce", tx.Nonce)

	return nil
}

// Mint creates new tokens and adds them to an account
// Only callable by the system (e.g., for rewards)
func (k Keeper) Mint(address string, amount *big.Int) error {
	account, err := k.GetAccount(address)
	if err != nil {
		return err
	}

	account.Balance = new(big.Int).Add(account.Balance, amount)
	return k.SetAccount(account)
}

// Lock locks tokens for governance or staking
func (k Keeper) Lock(address string, amount *big.Int) error {
	account, err := k.GetAccount(address)
	if err != nil {
		return err
	}

	if account.Balance.Cmp(amount) < 0 {
		return fmt.Errorf("insufficient balance to lock")
	}

	account.Balance = new(big.Int).Sub(account.Balance, amount)
	account.Locked = new(big.Int).Add(account.Locked, amount)
	return k.SetAccount(account)
}

// Unlock releases locked tokens
func (k Keeper) Unlock(address string, amount *big.Int) error {
	account, err := k.GetAccount(address)
	if err != nil {
		return err
	}

	if account.Locked.Cmp(amount) < 0 {
		return fmt.Errorf("insufficient locked tokens")
	}

	account.Locked = new(big.Int).Sub(account.Locked, amount)
	account.Balance = new(big.Int).Add(account.Balance, amount)
	return k.SetAccount(account)
}
