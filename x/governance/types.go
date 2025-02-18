package governance

import (
	"math/big"
	"time"
)

const (
	// VotingPeriod is the duration for which a proposal is open for voting
	VotingPeriod = 7 * 24 * time.Hour

	// MinimumDeposit is the minimum amount of BGL tokens required for a proposal
	MinimumDeposit = 1000

	// QuorumPercentage is the minimum percentage of total voting power that must vote
	QuorumPercentage = 40

	// PassPercentage is the percentage of votes that must be "yes" for a proposal to pass
	PassPercentage = 50
)

// ProposalType represents different types of proposals
type ProposalType string

const (
	ProposalTypeText       ProposalType = "text"       // General text proposals
	ProposalTypeParameter  ProposalType = "parameter"  // Parameter change proposals
	ProposalTypeContribute ProposalType = "contribute" // Contribution reward proposals
)

// ProposalStatus represents the status of a proposal
type ProposalStatus string

const (
	StatusPending   ProposalStatus = "pending"
	StatusActive    ProposalStatus = "active"
	StatusPassed    ProposalStatus = "passed"
	StatusRejected  ProposalStatus = "rejected"
	StatusExecuted  ProposalStatus = "executed"
	StatusCancelled ProposalStatus = "cancelled"
)

// VoteOption represents voting options
type VoteOption int

const (
	OptionYes VoteOption = iota
	OptionNo
	OptionAbstain
)

// Proposal represents a governance proposal
type Proposal struct {
	ID          uint64        `json:"id"`
	Title       string        `json:"title"`
	Description string        `json:"description"`
	Type        ProposalType  `json:"type"`
	Status      ProposalStatus `json:"status"`
	Proposer    string        `json:"proposer"`    // National's public key
	Deposit     *big.Int      `json:"deposit"`     // Amount of BGL tokens deposited
	StartTime   time.Time     `json:"start_time"`
	EndTime     time.Time     `json:"end_time"`
	VotingPower *big.Int      `json:"voting_power"` // Total voting power at proposal creation
	Params      []Parameter   `json:"params,omitempty"`
}

// Parameter represents a system parameter that can be changed via governance
type Parameter struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}

// Vote represents a vote on a proposal
type Vote struct {
	ProposalID uint64     `json:"proposal_id"`
	Voter      string     `json:"voter"`      // National's public key
	Option     VoteOption `json:"option"`
	Power      *big.Int   `json:"power"`      // Voting power (based on BGL tokens)
	Timestamp  time.Time  `json:"timestamp"`
}

// NewProposal creates a new proposal
func NewProposal(
	id uint64,
	title string,
	description string,
	proposalType ProposalType,
	proposer string,
	deposit *big.Int,
	votingPower *big.Int,
	params []Parameter,
) *Proposal {
	now := time.Now()
	return &Proposal{
		ID:          id,
		Title:       title,
		Description: description,
		Type:        proposalType,
		Status:      StatusPending,
		Proposer:    proposer,
		Deposit:     deposit,
		StartTime:   now,
		EndTime:     now.Add(VotingPeriod),
		VotingPower: votingPower,
		Params:      params,
	}
}

// NewVote creates a new vote
func NewVote(proposalID uint64, voter string, option VoteOption, power *big.Int) *Vote {
	return &Vote{
		ProposalID: proposalID,
		Voter:      voter,
		Option:     option,
		Power:      power,
		Timestamp:  time.Now(),
	}
}
