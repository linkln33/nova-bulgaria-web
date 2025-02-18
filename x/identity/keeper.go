package identity

import (
	"encoding/json"
	"fmt"

	"github.com/tendermint/tendermint/libs/log"
	dbm "github.com/tendermint/tm-db"
)

const (
	NationalIDPrefix = "national_id:"
	MetadataPrefix  = "metadata:"
)

// Keeper maintains the link to storage and exposes getter/setter methods for the various parts of the state machine
type Keeper struct {
	db     dbm.DB
	logger log.Logger
}

// NewKeeper creates new instances of the identity Keeper
func NewKeeper(db dbm.DB, logger log.Logger) Keeper {
	return Keeper{
		db:     db,
		logger: logger,
	}
}

// StoreNationalID saves a national's ID in the store
func (k Keeper) StoreNationalID(id *NationalID) error {
	if id == nil {
		return fmt.Errorf("cannot store nil national ID")
	}

	bz, err := json.Marshal(id)
	if err != nil {
		return fmt.Errorf("failed to marshal national ID: %w", err)
	}

	key := []byte(NationalIDPrefix + id.ID)
	k.db.Set(key, bz)
	k.logger.Info("Stored national ID", "id", id.ID)
	return nil
}

// GetNationalID retrieves a national's ID from the store
func (k Keeper) GetNationalID(id string) (*NationalID, error) {
	key := []byte(NationalIDPrefix + id)
	bz, err := k.db.Get(key)
	if err != nil {
		return nil, fmt.Errorf("failed to get national ID: %w", err)
	}
	if bz == nil {
		return nil, fmt.Errorf("national ID not found: %s", id)
	}

	var nationalID NationalID
	if err := json.Unmarshal(bz, &nationalID); err != nil {
		return nil, fmt.Errorf("failed to unmarshal national ID: %w", err)
	}

	return &nationalID, nil
}

// UpdateNationalIDStatus updates the status of a national's ID
func (k Keeper) UpdateNationalIDStatus(id string, status string) error {
	nationalID, err := k.GetNationalID(id)
	if err != nil {
		return err
	}

	nationalID.Status = status
	return k.StoreNationalID(nationalID)
}

// ListNationalIDs returns all national IDs with optional filtering
func (k Keeper) ListNationalIDs(status string) ([]*NationalID, error) {
	iterator, err := k.db.Iterator([]byte(NationalIDPrefix), nil)
	if err != nil {
		return nil, fmt.Errorf("failed to create iterator: %w", err)
	}
	defer iterator.Close()

	var nationalIDs []*NationalID
	for ; iterator.Valid(); iterator.Next() {
		var nationalID NationalID
		if err := json.Unmarshal(iterator.Value(), &nationalID); err != nil {
			return nil, fmt.Errorf("failed to unmarshal national ID: %w", err)
		}

		if status == "" || nationalID.Status == status {
			nationalIDs = append(nationalIDs, &nationalID)
		}
	}

	return nationalIDs, nil
}

// DeleteNationalID removes a national's ID from the store
func (k Keeper) DeleteNationalID(id string) error {
	key := []byte(NationalIDPrefix + id)
	k.db.Delete(key)
	k.logger.Info("Deleted national ID", "id", id)
	return nil
}
