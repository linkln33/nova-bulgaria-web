# NOVA BULGARIA

NOVA BULGARIA is a sovereign digital nation powered by blockchain technology. This implementation uses the Cosmos SDK to create a comprehensive system for digital governance, identity, and economic activity.

## Core Components

1. **National NFT ID System**
   - Non-transferable NFT IDs for nationals
   - Metadata includes personal information, rank, and qualifications

2. **BGL Token**
   - Bulgarian Lion (BGL) as the national currency
   - Minted through Proof of Contribution (PoC)
   - Base denomination: ubgl (micro-BGL)
   - Initial supply: 1 billion BGL

3. **Governance System**
   - Decentralized decision-making
   - Voting power based on contribution

4. **Proof of Contribution (PoC)**
   - Tracks and rewards various forms of contribution
   - Categories: work, education, social impact

## Development Setup

### Prerequisites
- Go 1.21+
- Make

### Building
```bash
make build
```

### Running Locally
```bash
make start
```

### Setting Up Testnet
1. Initialize the chain:
```bash
./scripts/init-testnet.sh
```

This script will:
- Initialize the chain with ID `nova-bulgaria-1`
- Create a validator account
- Add genesis transactions
- Start the chain

2. Configure your wallet:
```bash
# Add a new key
novad keys add <key-name>

# Get testnet tokens
novad tx bank send validator <your-address> 1000000ubgl --chain-id nova-bulgaria-1
```

3. Participate in governance:
```bash
# Submit a proposal
novad tx gov submit-proposal \
  --title "Test Proposal" \
  --description "This is a test proposal" \
  --type Text \
  --deposit 100000ubgl \
  --from <key-name> \
  --chain-id nova-bulgaria-1

# Vote on a proposal
novad tx gov vote <proposal-id> yes --from <key-name> --chain-id nova-bulgaria-1
```

## Project Structure
```
.
├── app/            # Application initialization and configuration
├── cmd/            # Command line interface
├── x/             # Custom modules
│   ├── token/     # BGL token implementation
│   ├── nft/       # NFT module for digital IDs
│   ├── identity/  # Identity management
│   └── governance/# Governance system
├── proto/         # Protocol buffer definitions
└── scripts/       # Utility scripts for chain management
```

## Token Economics

The BGL token (Bulgarian Lion) is the native token of NOVA BULGARIA with the following specifications:

- **Base Unit**: ubgl (micro-BGL)
- **Conversion**: 1 BGL = 1,000,000 ubgl
- **Initial Supply**: 1,000,000,000 BGL
- **Distribution**:
  - 40% Community Pool
  - 30% Development Fund
  - 20% Validator Rewards
  - 10% Initial Contributors

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.
