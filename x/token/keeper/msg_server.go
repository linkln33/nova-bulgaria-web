package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/nova-bulgaria/x/token/types"
)

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the token MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

var _ types.MsgServer = msgServer{}

// Mint handles MsgMint
func (k msgServer) Mint(goCtx context.Context, msg *types.MsgMint) (*types.MsgMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if err := k.MintTokens(ctx, msg); err != nil {
		return nil, err
	}

	return &types.MsgMintResponse{}, nil
}

// Burn handles MsgBurn
func (k msgServer) Burn(goCtx context.Context, msg *types.MsgBurn) (*types.MsgBurnResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if err := k.BurnTokens(ctx, msg); err != nil {
		return nil, err
	}

	return &types.MsgBurnResponse{}, nil
}
