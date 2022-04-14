package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type NewUser struct {
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname,omitempty"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	Reason    string `json:"reason,omitempty"`
}

func verifyRegister(user NewUser) ErrorMsg {
	// TODO: For each field, check for errors
	//		 We can assume that the form is valid, we are only checking for existing users, and that
	//		 the action completed successfully
	errMsg := ErrorMsg{}

	if user.Email == "used@gmail.com" {
		errMsg.Error = "Email already in use"
		errMsg.ErrorField = "email"
	}

	return errMsg
}

func register(r *http.Request) {

	user := NewUser{}

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		panic(err)
	}

	errMsg := verifyRegister(user)

	fmt.Println(errMsg)

}
