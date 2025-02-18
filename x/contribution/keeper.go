package contribution

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
	ContributionPrefix = "contribution:"
	ValidationPrefix  = "validation:"
	ValidatorPrefix   = "validator:"

	// Minimum validators required for approval
	MinValidators = 3

	// Percentage of validators that must approve
	ApprovalThreshold = 66 // 66%
)

// Keeper maintains the contribution system state
type Keeper struct {
	db            dbm.DB
	logger        log.Logger
	identityKeeper *identity.Keeper
	tokenKeeper    *token.Keeper
}

// NewKeeper creates a new contribution Keeper
func NewKeeper(db dbm.DB, logger log.Logger, identityKeeper *identity.Keeper, tokenKeeper *token.Keeper) Keeper {
	return Keeper{
		db:            db,
		logger:        logger,
		identityKeeper: identityKeeper,
		tokenKeeper:    tokenKeeper,
	}
}

// SubmitContribution submits a new contribution
func (k Keeper) SubmitContribution(contribution *Contribution) error {
	// Verify contributor is a registered national
	_, err := k.identityKeeper.GetNationalID(contribution.National)
	if err != nil {
		return fmt.Errorf("contributor is not a registered national: %w", err)
	}

	// Store contribution
	bz, err := json.Marshal(contribution)
	if err != nil {
		return fmt.Errorf("failed to marshal contribution: %w", err)
	}

	key := []byte(ContributionPrefix + contribution.ID)
	k.db.Set(key, bz)

	k.logger.Info("Contribution submitted",
		"id", contribution.ID,
		"type", contribution.Type,
		"national", contribution.National)

	return nil
}

// ValidateContribution validates a contribution
func (k Keeper) ValidateContribution(result *ValidationResult) error {
	// Get contribution
	contribution, err := k.GetContribution(result.ContributionID)
	if err != nil {
		return err
	}

	// Verify validator
	validator, err := k.GetValidator(result.Validator)
	if err != nil {
		return fmt.Errorf("validator not found: %w", err)
	}

	// Check validator's power
	if validator.Power.Cmp(big.NewInt(0)) <= 0 {
		return fmt.Errorf("validator has no validation power")
	}

	// Store validation result
	bz, err := json.Marshal(result)
	if err != nil {
		return fmt.Errorf("failed to marshal validation result: %w", err)
	}

	key := []byte(fmt.Sprintf("%s%s_%s", ValidationPrefix, result.ContributionID, result.Validator))
	k.db.Set(key, bz)

	// Update contribution if approved
	if result.Approved {
		contribution.Validators = append(contribution.Validators, result.Validator)
		
		// Check if enough validators have approved
		if len(contribution.Validators) >= MinValidators {
			totalPower := big.NewInt(0)
			approvalPower := big.NewInt(0)
			
			results, err := k.GetValidationResults(contribution.ID)
			if err != nil {
				return err
			}

			for _, res := range results {
				validator, err := k.GetValidator(res.Validator)
				if err != nil {
					continue
				}
				totalPower.Add(totalPower, validator.Power)
				if res.Approved {
					approvalPower.Add(approvalPower, validator.Power)
				}
			}

			// Calculate approval percentage
			percentage := new(big.Int).Mul(approvalPower, big.NewInt(100))
			percentage.Div(percentage, totalPower)

			if percentage.Cmp(big.NewInt(ApprovalThreshold)) >= 0 {
				contribution.Status = StatusApproved
				// Mint and distribute reward
				if err := k.tokenKeeper.Mint(contribution.National, contribution.Reward); err != nil {
					return fmt.Errorf("failed to distribute reward: %w", err)
				}
			}
		}

		if err := k.updateContribution(contribution); err != nil {
			return err
		}
	}

	k.logger.Info("Contribution validated",
		"id", result.ContributionID,
		"validator", result.Validator,
		"approved", result.Approved)

	return nil
}

// GetContribution retrieves a contribution by ID
func (k Keeper) GetContribution(id string) (*Contribution, error) {
	key := []byte(ContributionPrefix + id)
	bz, err := k.db.Get(key)
	if err != nil {
		return nil, fmt.Errorf("failed to get contribution: %w", err)
	}
	if bz == nil {
		return nil, fmt.Errorf("contribution not found: %s", id)
	}

	var contribution Contribution
	if err := json.Unmarshal(bz, &contribution); err != nil {
		return nil, fmt.Errorf("failed to unmarshal contribution: %w", err)
	}

	return &contribution, nil
}

// GetValidator retrieves a validator by address
func (k Keeper) GetValidator(address string) (*Validator, error) {
	key := []byte(ValidatorPrefix + address)
	bz, err := k.db.Get(key)
	if err != nil {
		return nil, fmt.Errorf("failed to get validator: %w", err)
	}
	if bz == nil {
		return nil, fmt.Errorf("validator not found: %s", address)
	}

	var validator Validator
	if err := json.Unmarshal(bz, &validator); err != nil {
		return nil, fmt.Errorf("failed to unmarshal validator: %w", err)
	}

	return &validator, nil
}

// GetValidationResults retrieves all validation results for a contribution
func (k Keeper) GetValidationResults(contributionID string) ([]*ValidationResult, error) {
	prefix := []byte(fmt.Sprintf("%s%s_", ValidationPrefix, contributionID))
	iterator, err := k.db.Iterator(prefix, nil)
	if err != nil {
		return nil, fmt.Errorf("failed to create iterator: %w", err)
	}
	defer iterator.Close()

	var results []*ValidationResult
	for ; iterator.Valid(); iterator.Next() {
		var result ValidationResult
		if err := json.Unmarshal(iterator.Value(), &result); err != nil {
			return nil, fmt.Errorf("failed to unmarshal validation result: %w", err)
		}
		results = append(results, &result)
	}

	return results, nil
}

// updateContribution updates a contribution in storage
func (k Keeper) updateContribution(contribution *Contribution) error {
	bz, err := json.Marshal(contribution)
	if err != nil {
		return fmt.Errorf("failed to marshal contribution: %w", err)
	}

	key := []byte(ContributionPrefix + contribution.ID)
	k.db.Set(key, bz)
	return nil
}
