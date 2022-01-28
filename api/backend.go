package main

import (
	"fmt"
)

type backend struct {
	Message string `json:"Message"`
}

func helloBackend() backend {
	fmt.Println("\nHello Backend!")

	var msg = backend{
		Message: "Hello from the backend!",
	}

	return msg
}
