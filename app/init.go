package app

import (
	"encoding/json"
	"os"
	"path/filepath"

	"github.com/cosmos/cosmos-sdk/baseapp"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/server"
	"github.com/cosmos/cosmos-sdk/x/auth"
	"github.com/cosmos/cosmos-sdk/x/bank"
	"github.com/cosmos/cosmos-sdk/x/staking"
	"github.com/nova-bulgaria/x/token"
	"github.com/spf13/cobra"
	tmcli "github.com/tendermint/tendermint/libs/cli"
	"github.com/tendermint/tendermint/libs/log"
	db "github.com/tendermint/tm-db"
)

const (
	DefaultNodeHome = "$HOME/.nova"
)

// ModuleBasics defines the module BasicManager is in charge of setting up basic,
// non-dependant module elements, such as codec registration and genesis verification.
var ModuleBasics = module.NewBasicManager(
	auth.AppModuleBasic{},
	bank.AppModuleBasic{},
	staking.AppModuleBasic{},
	token.AppModuleBasic{},
)

// DefaultGenesisState returns a default genesis state
func DefaultGenesisState() map[string]json.RawMessage {
	return ModuleBasics.DefaultGenesis()
}

// NewNovaApp returns a reference to an initialized NovaApp.
func NewNovaApp(
	logger log.Logger,
	db db.DB,
	traceStore io.Writer,
	loadLatest bool,
	skipUpgradeHeights map[int64]bool,
	homePath string,
	invCheckPeriod uint,
	encodingConfig EncodingConfig,
	appOpts servertypes.AppOptions,
	baseAppOptions ...func(*baseapp.BaseApp),
) *NovaApp {
	
	// Initialize the app
	bApp := baseapp.NewBaseApp(AppName, logger, db, encodingConfig.TxConfig.TxDecoder(), baseAppOptions...)
	bApp.SetCommitMultiStoreTracer(traceStore)
	bApp.SetVersion(version.Version)
	bApp.SetInterfaceRegistry(encodingConfig.InterfaceRegistry)

	keys := sdk.NewKVStoreKeys(
		auth.StoreKey,
		bank.StoreKey,
		staking.StoreKey,
		token.StoreKey,
	)

	// Initialize the app with keepers
	app := &NovaApp{
		BaseApp:           bApp,
		cdc:              encodingConfig.Marshaler,
		legacyAmino:      encodingConfig.Amino,
		interfaceRegistry: encodingConfig.InterfaceRegistry,
		keys:             keys,
	}

	// Initialize keepers
	app.accountKeeper = auth.NewAccountKeeper(
		encodingConfig.Marshaler,
		keys[auth.StoreKey],
		auth.ProtoBaseAccount,
		maccPerms,
	)

	app.bankKeeper = bank.NewBaseKeeper(
		encodingConfig.Marshaler,
		keys[bank.StoreKey],
		app.accountKeeper,
		app.ModuleAccountAddrs(),
		authtypes.NewModuleAddress(govtypes.ModuleName).String(),
	)

	app.tokenKeeper = token.NewKeeper(
		encodingConfig.Marshaler,
		keys[token.StoreKey],
		app.bankKeeper,
	)

	// Register the proposal types
	govRouter := govtypes.NewRouter()
	govRouter.AddRoute(govtypes.RouterKey, govtypes.ProposalHandler).
		AddRoute(paramproposal.RouterKey, params.NewParamChangeProposalHandler(app.paramsKeeper))

	// Initialize the module manager
	app.mm = module.NewManager(
		auth.NewAppModule(encodingConfig.Marshaler, app.accountKeeper, nil),
		bank.NewAppModule(encodingConfig.Marshaler, app.bankKeeper, app.accountKeeper),
		token.NewAppModule(app.tokenKeeper),
	)

	// Set the order of Genesis - Order matters, genutil is to always come last
	app.mm.SetOrderInitGenesis(
		auth.ModuleName,
		bank.ModuleName,
		token.ModuleName,
	)

	app.mm.RegisterRoutes(app.Router(), app.QueryRouter(), encodingConfig.Amino)
	app.mm.RegisterServices(module.NewConfigurator(app.MsgServiceRouter(), app.GRPCQueryRouter()))

	// Initialize stores
	app.MountKVStores(keys)
	app.MountTransientStores(tkeys)
	app.MountMemoryStores(memKeys)

	// Initialize BaseApp
	app.SetInitChainer(app.InitChainer)
	app.SetBeginBlocker(app.BeginBlocker)
	app.SetEndBlocker(app.EndBlocker)
	app.SetAnteHandler(
		ante.NewAnteHandler(
			app.accountKeeper,
			app.bankKeeper,
			ante.DefaultSigVerificationGasConsumer,
			encodingConfig.TxConfig.SignModeHandler(),
		),
	)

	if loadLatest {
		if err := app.LoadLatestVersion(); err != nil {
			tmos.Exit(err.Error())
		}
	}

	return app
}
