package types

import (
	"context"
	proto "github.com/gogo/protobuf/proto"
)

// MsgServer defines the token module's gRPC message service
type MsgServer interface {
	Mint(context.Context, *MsgMint) (*MsgMintResponse, error)
	Burn(context.Context, *MsgBurn) (*MsgBurnResponse, error)
}

// MsgMintResponse defines the response structure for executing a MsgMint message
type MsgMintResponse struct{}

func (*MsgMintResponse) Reset()         { *new(MsgMintResponse) = MsgMintResponse{} }
func (*MsgMintResponse) String() string { return proto.CompactTextString(new(MsgMintResponse)) }
func (*MsgMintResponse) ProtoMessage()  {}

// MsgBurnResponse defines the response structure for executing a MsgBurn message
type MsgBurnResponse struct{}

func (*MsgBurnResponse) Reset()         { *new(MsgBurnResponse) = MsgBurnResponse{} }
func (*MsgBurnResponse) String() string { return proto.CompactTextString(new(MsgBurnResponse)) }
func (*MsgBurnResponse) ProtoMessage()  {}
