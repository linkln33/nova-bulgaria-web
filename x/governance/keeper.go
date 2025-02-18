package governance

import (
	"encoding/json"
	"fmt"
	"math/big"

	"github.com/tendermint/tendermint/libs/log"
	dbm "github.com/tendermint/tm-db"
	"github.com/nova-bulgaria/x/identity"
	"github.com/nova-bulgaria/x/token"
)

const (
	ProposalPrefix = "proposal:"
	VotePrefix     = "vote:"
)

// Keeper maintains the governance state
type Keeper struct {
	db            dbm.DB
	logger        log.Logger
	identityKeeper *identity.Keeper
	tokenKeeper    *token.Keeper
}

// NewKeeper creates a new governance Keeper
func NewKeeper(db dbm.DB, logger log.Logger, identityKeeper *identity.Keeper, tokenKeeper *token.Keeper) Keeper {
	return Keeper{
		db:            db,
		logger:        logger,
		identityKeeper: identityKeeper,
		tokenKeeper:    tokenKeeper,
	}
}

// SubmitProposal submits a new proposal
func (k Keeper) SubmitProposal(proposal *Proposal) error {
	// Verify proposer is a registered national
	_, err := k.identityKeeper.GetNationalID(proposal.Proposer)
	if err != nil {
		return fmt.Errorf("proposer is not a registered national: %w", err)
	}

	// Check minimum deposit
	minDeposit := new(big.Int).Mul(
		big.NewInt(MinimumDeposit),
		new(big.Int).Exp(big.NewInt(10), big.NewInt(token.TokenDecimals), nil),
	)
	if proposal.Deposit.Cmp(minDeposit) < 0 {
		return fmt.Errorf("deposit too low, minimum required: %v", minDeposit)
	}

	// Lock deposit
	if err := k.tokenKeeper.Lock(proposal.Proposer, proposal.Deposit); err != nil {
		return fmt.Errorf("failed to lock deposit: %w", err)
	}

	// Store proposal
	bz, err := json.Marshal(proposal)
	if err != nil {
		return fmt.Errorf("failed to marshal proposal: %w", err)
	}

	key := []byte(fmt.Sprintf("%s%d", ProposalPrefix, proposal.ID))
	k.db.Set(key, bz)

	k.logger.Info("Proposal submitted",
		"id", proposal.ID,
		"type", proposal.Type,
		"proposer", proposal.Proposer)

	return nil
}

// Vote casts a vote on a proposal
func (k Keeper) Vote(vote *Vote) error {
	// Verify voter is a registered national
	_, err := k.identityKeeper.GetNationalID(vote.Voter)
	if err != nil {
		return fmt.Errorf("voter is not a registered national: %w", err)
	}

	// Get proposal
	proposal, err := k.GetProposal(vote.ProposalID)
	if err != nil {
		return err
	}

	// Check if proposal is active
	if proposal.Status != StatusActive {
		return fmt.Errorf("proposal is not active")
	}

	// Calculate voting power based on locked tokens
	account, err := k.tokenKeeper.GetAccount(vote.Voter)
	if err != nil {
		return err
	}
	vote.Power = account.Locked

	// Store vote
	bz, err := json.Marshal(vote)
	if err != nil {
		return fmt.Errorf("failed to marshal vote: %w", err)
	}

	key := []byte(fmt.Sprintf("%s%d_%s", VotePrefix, vote.ProposalID, vote.Voter))
	k.db.Set(key, bz)

	k.logger.Info("Vote cast",
		"proposal_id", vote.ProposalID,
		"voter", vote.Voter,
		"option", vote.Option)

	return nil
}

// GetProposal retrieves a proposal by ID
func (k Keeper) GetProposal(id uint64) (*Proposal, error) {
	key := []byte(fmt.Sprintf("%s%d", ProposalPrefix, id))
	bz, err := k.db.Get(key)
	if err != nil {
		return nil, fmt.Errorf("failed to get proposal: %w", err)
	}
	if bz == nil {
		return nil, fmt.Errorf("proposal not found: %d", id)
	}

	var proposal Proposal
	if err := json.Unmarshal(bz, &proposal); err != nil {
		return nil, fmt.Errorf("failed to unmarshal proposal: %w", err)
	}

	return &proposal, nil
}

// GetVotes retrieves all votes for a proposal
func (k Keeper) GetVotes(proposalID uint64) ([]*Vote, error) {
	prefix := []byte(fmt.Sprintf("%s%d_", VotePrefix, proposalID))
	iterator, err := k.db.Iterator(prefix, nil)
	if err != nil {
		return nil, fmt.Errorf("failed to create iterator: %w", err)
	}
	defer iterator.Close()

	var votes []*Vote
	for ; iterator.Valid(); iterator.Next() {
		var vote Vote
		if err := json.Unmarshal(iterator.Value(), &vote); err != nil {
			return nil, fmt.Errorf("failed to unmarshal vote: %w", err)
		}
		votes = append(votes, &vote)
	}

	return votes, nil
}

// ProcessProposal processes a proposal after its voting period ends
func (k Keeper) ProcessProposal(proposal *Proposal) error {
	votes, err := k.GetVotes(proposal.ID)
	if err != nil {
		return err
	}

	// Calculate total votes and voting power
	totalPower := big.NewInt(0)
	yesPower := big.NewInt(0)
	for _, vote := range votes {
		totalPower.Add(totalPower, vote.Power)
		if vote.Option == OptionYes {
			yesPower.Add(yesPower, vote.Power)
		}
	}

	// Check quorum
	quorumRequired := new(big.Int).Mul(proposal.VotingPower, big.NewInt(QuorumPercentage))
	quorumRequired.Div(quorumRequired, big.NewInt(100))
	if totalPower.Cmp(quorumRequired) < 0 {
		proposal.Status = StatusRejected
		return k.updateProposal(proposal)
	}

	// Check if proposal passed
	yesPercentage := new(big.Int).Mul(yesPower, big.NewInt(100))
	yesPercentage.Div(yesPercentage, totalPower)
	if yesPercentage.Cmp(big.NewInt(PassPercentage)) >= 0 {
		proposal.Status = StatusPassed
	} else {
		proposal.Status = StatusRejected
	}

	return k.updateProposal(proposal)
}

// updateProposal updates a proposal in storage
func (k Keeper) updateProposal(proposal *Proposal) error {
	bz, err := json.Marshal(proposal)
	if err != nil {
		return fmt.Errorf("failed to marshal proposal: %w", err)
	}

	key := []byte(fmt.Sprintf("%s%d", ProposalPrefix, proposal.ID))
	k.db.Set(key, bz)
	return nil
}
