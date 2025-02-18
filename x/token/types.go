package token

import (
	"math/big"
	"time"
)

const (
	// TokenName is the name of the BGL token
	TokenName = "BGL"
	// TokenSymbol is the symbol of the BGL token
	TokenSymbol = "BGL"
	// TokenDecimals is the number of decimal places for the BGL token
	TokenDecimals = 18
)

// Account represents a BGL token account
type Account struct {
	Address    string     `json:"address"`     // National's public key serves as address
	Balance    *big.Int   `json:"balance"`     // Account balance
	Locked     *big.Int   `json:"locked"`      // Locked tokens (for governance/staking)
	LastUpdate time.Time  `json:"last_update"` // Last update timestamp
	Nonce      uint64     `json:"nonce"`       // Transaction nonce
}

// Transaction represents a BGL token transaction
type Transaction struct {
	From      string     `json:"from"`       // Sender's address
	To        string     `json:"to"`         // Recipient's address
	Amount    *big.Int   `json:"amount"`     // Transaction amount
	Nonce     uint64     `json:"nonce"`      // Transaction nonce
	Timestamp time.Time  `json:"timestamp"`  // Transaction timestamp
	Type      string     `json:"type"`       // Transaction type (transfer, stake, etc.)
	Signature string     `json:"signature"`  // Transaction signature
}

// NewAccount creates a new account with zero balance
func NewAccount(address string) *Account {
	return &Account{
		Address:    address,
		Balance:    big.NewInt(0),
		Locked:     big.NewInt(0),
		LastUpdate: time.Now(),
		Nonce:      0,
	}
}

// NewTransaction creates a new transaction
func NewTransaction(from, to string, amount *big.Int, nonce uint64, txType string) *Transaction {
	return &Transaction{
		From:      from,
		To:        to,
		Amount:    amount,
		Nonce:     nonce,
		Timestamp: time.Now(),
		Type:      txType,
	}
}

// ValidateTransaction validates a transaction
func (tx *Transaction) ValidateTransaction() bool {
	// Basic validation
	if tx.From == "" || tx.To == "" || tx.Amount == nil || tx.Amount.Sign() <= 0 {
		return false
	}

	// Validate transaction type
	switch tx.Type {
	case "transfer", "stake", "unstake", "governance":
		return true
	default:
		return false
	}
}
