package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GenesisState defines the token module's genesis state
type GenesisState struct {
	Supply sdk.Coin `json:"supply"`
}

// DefaultGenesis returns a default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		Supply: sdk.NewCoin(BaseDenom, sdk.NewInt(InitialSupply)),
	}
}

// Validate performs basic genesis state validation
func (gs GenesisState) Validate() error {
	if !gs.Supply.IsValid() {
		return ErrInvalidSupply
	}
	return nil
}
