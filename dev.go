package main

import (
	"fmt"
	"log"
	"os"
	"os/exec"
	"runtime"
)

func echoCommand(commandArgs []string) string {
	command := ""

	for _, v := range commandArgs {
		if command == "" {
			command = v
		} else {
			command += fmt.Sprintf(` %v`, v)
		}
	}

	return command
}

func errorOut(err string) {
	fmt.Println(err)
	log.Fatalln(err)
}

func handleCommand(cmd *exec.Cmd) {

	// Get output/error
	stdout, err := cmd.Output()

	// Handle error
	if err != nil {
		log.Fatalln(err.Error())
	}

	// Handle output
	fmt.Println(string(stdout))
}

func notRecognized(command string, scope string) {
	errorOut(fmt.Sprintf(`Command '%v' not recognized in '%v'`, command, scope))
}

func run(commandArgs []string) {
	if len(commandArgs) < 2 {
		errorOut(fmt.Sprintf(`Expected another argument for %v`, echoCommand(commandArgs)))
	}

	switch commandArgs[1] {
	case "dev":
		runDev(commandArgs)
		fmt.Println("Success.")
	default:
		notRecognized(commandArgs[1], commandArgs[2])
	}
}

func runDev(commandArgs []string) {
	osVersion := runtime.GOOS

	fmt.Printf(`Starting dev on %v...`, osVersion)
	fmt.Println()

	switch osVersion {
	case "windows":
		handleCommand(exec.Command("cmd", "/C", "cd api && go run ."))
	}

	fmt.Println("Stopping dev.")
}

func main() {
	// name := os.Args[0]
	commandArgs := os.Args[1:]
	fmt.Println(echoCommand(commandArgs))

	switch commandArgs[0] {
	case "run":
		run(commandArgs)
	default:
		notRecognized(commandArgs[0], commandArgs[1])
	}
}
