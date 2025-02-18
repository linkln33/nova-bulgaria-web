package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	proto "github.com/gogo/protobuf/proto"
)

// Message types for the token module
const (
	TypeMsgMint = "mint"
	TypeMsgBurn = "burn"
)

var _ sdk.Msg = &MsgMint{}
var _ sdk.Msg = &MsgBurn{}
var _ proto.Message = &MsgMint{}
var _ proto.Message = &MsgBurn{}

// MsgMint defines a message to mint tokens
type MsgMint struct {
	From   sdk.AccAddress `json:"from"`
	Amount sdk.Coin      `json:"amount"`
}

// Reset implements proto.Message
func (msg *MsgMint) Reset() { *msg = MsgMint{} }

// String implements proto.Message
func (msg MsgMint) String() string { return proto.CompactTextString(&msg) }

// ProtoMessage implements proto.Message
func (*MsgMint) ProtoMessage() {}

// NewMsgMint creates a new MsgMint instance
func NewMsgMint(from sdk.AccAddress, amount sdk.Coin) *MsgMint {
	return &MsgMint{
		From:   from,
		Amount: amount,
	}
}

// Route implements Msg
func (msg MsgMint) Route() string { return RouterKey }

// Type implements Msg
func (msg MsgMint) Type() string { return TypeMsgMint }

// ValidateBasic implements Msg
func (msg MsgMint) ValidateBasic() error {
	if msg.From.Empty() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "sender address cannot be empty")
	}
	if !msg.Amount.IsValid() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidCoins, "amount must be valid")
	}
	return nil
}

// GetSignBytes implements Msg
func (msg MsgMint) GetSignBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(&msg))
}

// GetSigners implements Msg
func (msg MsgMint) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{msg.From}
}

// MsgBurn defines a message to burn tokens
type MsgBurn struct {
	From   sdk.AccAddress `json:"from"`
	Amount sdk.Coin      `json:"amount"`
}

// Reset implements proto.Message
func (msg *MsgBurn) Reset() { *msg = MsgBurn{} }

// String implements proto.Message
func (msg MsgBurn) String() string { return proto.CompactTextString(&msg) }

// ProtoMessage implements proto.Message
func (*MsgBurn) ProtoMessage() {}

// NewMsgBurn creates a new MsgBurn instance
func NewMsgBurn(from sdk.AccAddress, amount sdk.Coin) *MsgBurn {
	return &MsgBurn{
		From:   from,
		Amount: amount,
	}
}

// Route implements Msg
func (msg MsgBurn) Route() string { return RouterKey }

// Type implements Msg
func (msg MsgBurn) Type() string { return TypeMsgBurn }

// ValidateBasic implements Msg
func (msg MsgBurn) ValidateBasic() error {
	if msg.From.Empty() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "sender address cannot be empty")
	}
	if !msg.Amount.IsValid() {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidCoins, "amount must be valid")
	}
	return nil
}

// GetSignBytes implements Msg
func (msg MsgBurn) GetSignBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(&msg))
}

// GetSigners implements Msg
func (msg MsgBurn) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{msg.From}
}
