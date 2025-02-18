package identity

import (
	"crypto/sha256"
	"encoding/hex"
	"time"
)

// NationalID represents the unique identifier for a national of NOVA Bulgaria
type NationalID struct {
	ID            string    `json:"id"`            // Unique identifier hash
	PublicKey     string    `json:"public_key"`    // National's public key
	IssuedAt      time.Time `json:"issued_at"`     // When the ID was issued
	ExpiresAt     time.Time `json:"expires_at"`    // When the ID expires
	Status        string    `json:"status"`        // Active, Suspended, Revoked
	Metadata      Metadata  `json:"metadata"`      // Additional national information
	ProofHash     string    `json:"proof_hash"`    // Hash of verification proofs
	Version       uint32    `json:"version"`       // Version of the ID format
}

// Metadata contains additional information about the national
type Metadata struct {
	Username    string   `json:"username"`     // Chosen username
	Roles       []string `json:"roles"`        // Roles in the digital nation
	Level       uint32   `json:"level"`        // National's level based on contributions
	JoinedAt    time.Time `json:"joined_at"`   // When they joined NOVA Bulgaria
	Achievements []string `json:"achievements"` // List of earned achievements
}

// GenerateID creates a unique ID hash from the public key and timestamp
func GenerateID(publicKey string, timestamp time.Time) string {
	data := publicKey + timestamp.String()
	hash := sha256.Sum256([]byte(data))
	return hex.EncodeToString(hash[:])
}

// NewNationalID creates a new NationalID instance
func NewNationalID(publicKey string, username string) *NationalID {
	now := time.Now()
	expires := now.AddDate(5, 0, 0) // IDs valid for 5 years

	id := &NationalID{
		ID:        GenerateID(publicKey, now),
		PublicKey: publicKey,
		IssuedAt:  now,
		ExpiresAt: expires,
		Status:    "Active",
		Version:   1,
		Metadata: Metadata{
			Username:     username,
			Roles:       []string{"national"},
			Level:       1,
			JoinedAt:    now,
			Achievements: []string{},
		},
	}

	// Generate proof hash of the ID data
	proofData := id.ID + id.PublicKey + id.Status + username
	proofHash := sha256.Sum256([]byte(proofData))
	id.ProofHash = hex.EncodeToString(proofHash[:])

	return id
}
