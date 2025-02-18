package types

import (
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
)

const (
	// ModuleName defines the module name
	ModuleName = "token"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName
)

// Token denomination
const (
	// Base denomination for Bulgarian Lion token
	BaseDenom = "ubgl"
	
	// Display denomination
	DisplayDenom = "BGL"
	
	// Token name
	TokenName = "Bulgarian Lion"
	
	// Initial supply in ubgl (1 BGL = 1,000,000 ubgl)
	InitialSupply = 1000000000000 // 1 billion BGL
)

// DenomMetadata returns the metadata for the BGL token
func DenomMetadata() banktypes.Metadata {
	return banktypes.Metadata{
		Description: "The native token of Nova Bulgaria",
		Base:        BaseDenom,
		Display:     DisplayDenom,
		DenomUnits: []*banktypes.DenomUnit{
			{
				Denom:    BaseDenom,
				Exponent: 0,
				Aliases:  []string{"microBGL"},
			},
			{
				Denom:    DisplayDenom,
				Exponent: 6,
				Aliases:  []string{"BGL"},
			},
		},
	}
}
