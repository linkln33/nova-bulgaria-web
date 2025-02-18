package identity

import (
	"crypto/ed25519"
	"crypto/rand"
	"encoding/base64"
	"fmt"
)

// KeyPair represents a public/private key pair
type KeyPair struct {
	PublicKey  string
	PrivateKey string
}

// GenerateKeyPair creates a new Ed25519 key pair
func GenerateKeyPair() (*KeyPair, error) {
	publicKey, privateKey, err := ed25519.GenerateKey(rand.Reader)
	if err != nil {
		return nil, fmt.Errorf("failed to generate key pair: %w", err)
	}

	return &KeyPair{
		PublicKey:  base64.StdEncoding.EncodeToString(publicKey),
		PrivateKey: base64.StdEncoding.EncodeToString(privateKey),
	}, nil
}

// SignMessage signs a message with the private key
func SignMessage(message []byte, privateKeyStr string) (string, error) {
	privateKeyBytes, err := base64.StdEncoding.DecodeString(privateKeyStr)
	if err != nil {
		return "", fmt.Errorf("failed to decode private key: %w", err)
	}

	privateKey := ed25519.PrivateKey(privateKeyBytes)
	signature := ed25519.Sign(privateKey, message)
	return base64.StdEncoding.EncodeToString(signature), nil
}

// VerifySignature verifies a signature with the public key
func VerifySignature(message []byte, signatureStr string, publicKeyStr string) (bool, error) {
	publicKeyBytes, err := base64.StdEncoding.DecodeString(publicKeyStr)
	if err != nil {
		return false, fmt.Errorf("failed to decode public key: %w", err)
	}

	signatureBytes, err := base64.StdEncoding.DecodeString(signatureStr)
	if err != nil {
		return false, fmt.Errorf("failed to decode signature: %w", err)
	}

	publicKey := ed25519.PublicKey(publicKeyBytes)
	return ed25519.Verify(publicKey, message, signatureBytes), nil
}
