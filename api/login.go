package main

import (
	"fmt"
)

type session struct {
	User string `json:"user"`
	Token string `json:"token"`
	Expires string `json:"expires"` // Datetime??
}

type error struct {
	Error string `json:"error"`
	ErrorField string `json:"errorField"`
}

func login(email: string, password: string) session {
	fmt.Println("\nHello Login!")

	var msg = session{
		User: "user",
		Token: "token",
		Expires: "01/01/01:01:01:01"
	}

	var error = error{
		Error: "error",
		ErrorField: "email",
	}

	return msg
}
