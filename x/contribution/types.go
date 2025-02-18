package contribution

import (
	"math/big"
	"time"
)

// ContributionType represents different types of contributions
type ContributionType string

const (
	ContributionTypeDevelopment ContributionType = "development" // Code contributions
	ContributionTypeGovernance ContributionType = "governance"   // Participation in governance
	ContributionTypeCommunity  ContributionType = "community"    // Community building
	ContributionTypeValidation ContributionType = "validation"   // Network validation
)

// ContributionStatus represents the status of a contribution
type ContributionStatus string

const (
	StatusPending   ContributionStatus = "pending"
	StatusApproved  ContributionStatus = "approved"
	StatusRejected  ContributionStatus = "rejected"
	StatusCompleted ContributionStatus = "completed"
)

// Contribution represents a contribution to NOVA Bulgaria
type Contribution struct {
	ID          string             `json:"id"`
	National    string             `json:"national"`    // National's public key
	Type        ContributionType   `json:"type"`
	Title       string             `json:"title"`
	Description string             `json:"description"`
	Status      ContributionStatus `json:"status"`
	Evidence    string             `json:"evidence"`    // Link or hash to evidence
	Reward      *big.Int          `json:"reward"`      // BGL token reward
	Timestamp   time.Time         `json:"timestamp"`
	Validators  []string          `json:"validators"`   // List of validators who approved
}

// Validator represents a contribution validator
type Validator struct {
	Address     string    `json:"address"`     // Validator's public key
	Power       *big.Int  `json:"power"`       // Validation power (based on stake)
	ValidatedAt time.Time `json:"validated_at"`
}

// ValidationResult represents a validator's assessment
type ValidationResult struct {
	ContributionID string    `json:"contribution_id"`
	Validator     string    `json:"validator"`
	Approved      bool      `json:"approved"`
	Comments      string    `json:"comments"`
	Timestamp     time.Time `json:"timestamp"`
}

// NewContribution creates a new contribution record
func NewContribution(
	id string,
	national string,
	contributionType ContributionType,
	title string,
	description string,
	evidence string,
	reward *big.Int,
) *Contribution {
	return &Contribution{
		ID:          id,
		National:    national,
		Type:        contributionType,
		Title:       title,
		Description: description,
		Status:      StatusPending,
		Evidence:    evidence,
		Reward:      reward,
		Timestamp:   time.Now(),
		Validators:  make([]string, 0),
	}
}

// NewValidationResult creates a new validation result
func NewValidationResult(
	contributionID string,
	validator string,
	approved bool,
	comments string,
) *ValidationResult {
	return &ValidationResult{
		ContributionID: contributionID,
		Validator:     validator,
		Approved:      approved,
		Comments:      comments,
		Timestamp:     time.Now(),
	}
}
