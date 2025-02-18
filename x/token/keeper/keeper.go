package keeper

import (
	"github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	tokentypes "github.com/nova-bulgaria/x/token/types"
)

// Keeper of the token store
type Keeper struct {
	storeKey sdk.StoreKey
	cdc      types.InterfaceRegistry
	bank     tokentypes.BankKeeper
}

// NewKeeper creates a new token Keeper instance
func NewKeeper(
	cdc types.InterfaceRegistry,
	key sdk.StoreKey,
	bankKeeper tokentypes.BankKeeper,
) Keeper {
	return Keeper{
		storeKey: key,
		cdc:      cdc,
		bank:     bankKeeper,
	}
}

// InitGenesis initializes the token module's state from a given genesis state
func (k Keeper) InitGenesis(ctx sdk.Context, data tokentypes.GenesisState) {
	// Mint initial supply to module account
	initialSupply := sdk.NewCoin(tokentypes.BaseDenom, sdk.NewInt(tokentypes.InitialSupply))
	if err := k.bank.MintCoins(ctx, tokentypes.ModuleName, sdk.NewCoins(initialSupply)); err != nil {
		panic(err)
	}
}

// ExportGenesis returns the token module's genesis state
func (k Keeper) ExportGenesis(ctx sdk.Context) *tokentypes.GenesisState {
	return &tokentypes.GenesisState{
		Supply: k.bank.GetSupply(ctx, tokentypes.BaseDenom),
	}
}

// MintTokens handles a MsgMint message
func (k Keeper) MintTokens(ctx sdk.Context, msg *tokentypes.MsgMint) error {
	// Only allow minting of BGL tokens
	if msg.Amount.Denom != tokentypes.BaseDenom {
		return sdkerrors.Wrapf(tokentypes.ErrInvalidDenom, "can only mint %s tokens", tokentypes.BaseDenom)
	}

	// Mint new tokens
	coins := sdk.NewCoins(msg.Amount)
	if err := k.bank.MintCoins(ctx, tokentypes.ModuleName, coins); err != nil {
		return err
	}

	// Send minted tokens to the specified address
	return k.bank.SendCoinsFromModuleToAccount(ctx, tokentypes.ModuleName, msg.From, coins)
}

// BurnTokens handles a MsgBurn message
func (k Keeper) BurnTokens(ctx sdk.Context, msg *tokentypes.MsgBurn) error {
	// Only allow burning of BGL tokens
	if msg.Amount.Denom != tokentypes.BaseDenom {
		return sdkerrors.Wrapf(tokentypes.ErrInvalidDenom, "can only burn %s tokens", tokentypes.BaseDenom)
	}

	coins := sdk.NewCoins(msg.Amount)

	// Send tokens to module account
	if err := k.bank.SendCoinsFromAccountToModule(ctx, msg.From, tokentypes.ModuleName, coins); err != nil {
		return err
	}

	// Burn tokens
	return k.bank.BurnCoins(ctx, tokentypes.ModuleName, coins)
}

// GetSupply returns the current supply of tokens
func (k Keeper) GetSupply(ctx sdk.Context) sdk.Coin {
	return k.bank.GetSupply(ctx, tokentypes.BaseDenom)
}
