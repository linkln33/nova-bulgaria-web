package types

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// Token module sentinel errors
var (
	ErrInvalidSupply = sdkerrors.Register(ModuleName, 1, "invalid supply")
	ErrInvalidDenom  = sdkerrors.Register(ModuleName, 2, "invalid denomination")
)
