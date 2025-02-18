package main

import (
	"os"

	"github.com/cosmos/cosmos-sdk/server"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/nova-bulgaria/app"
	"github.com/spf13/cobra"
	"github.com/tendermint/tendermint/libs/cli"
)

func main() {
	rootCmd := &cobra.Command{
		Use:   "novad",
		Short: "NOVA Bulgaria Blockchain App",
		PersistentPreRunE: server.PersistentPreRunEFn(app.DefaultNodeHome),
	}

	server.AddCommands(rootCmd, app.DefaultNodeHome, app.NewNovaApp, app.DefaultGenesisState(), app.ModuleBasics)

	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
