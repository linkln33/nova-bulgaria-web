#!/bin/bash

# Initialize the chain
novad init testnet --chain-id nova-bulgaria-1

# Add genesis account with initial supply
novad add-genesis-account $(novad keys show validator -a) 1000000000ubgl

# Generate genesis transaction
novad gentx validator 100000000ubgl --chain-id nova-bulgaria-1

# Collect genesis transactions
novad collect-gentxs

# Copy the genesis file to config directory
cp config/genesis.json ~/.nova/config/

# Start the chain
novad start
