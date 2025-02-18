PACKAGES=$(shell go list ./... | grep -v '/simulation')
VERSION := $(shell echo $(shell git describe --tags) | sed 's/^v//')
COMMIT := $(shell git log -1 --format='%H')
BUILD_TAGS := netgo
BUILD_FLAGS := -tags "$(BUILD_TAGS)" -ldflags '-X github.com/cosmos/cosmos-sdk/version.Name=nova \
	-X github.com/cosmos/cosmos-sdk/version.ServerName=novad \
	-X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
	-X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT)'

all: install

install: go.sum
	@echo "--> Installing novad"
	@go install -mod=readonly $(BUILD_FLAGS) ./cmd/novad

build: go.sum
	@echo "--> Building novad"
	@go build -mod=readonly $(BUILD_FLAGS) -o bin/novad ./cmd/novad

go.sum: go.mod
	@echo "--> Ensure dependencies have not been modified"
	@go mod verify

test:
	@go test -mod=readonly $(PACKAGES)

init-testnet: build
	@echo "--> Initializing testnet"
	@./scripts/init-testnet.sh

start-testnet: build
	@echo "--> Starting testnet"
	@bin/novad start

clean:
	@echo "--> Cleaning up"
	@rm -rf bin/
	@rm -rf ~/.nova/

proto-gen:
	@echo "--> Generating protobuf files"
	@buf generate

.PHONY: all install build test init-testnet start-testnet clean proto-gen
