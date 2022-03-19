package main

func verifyLogin(email string, password string) ErrorMsg {
	// TODO: Encode password with hash key and check with DB for correct login

	errMsg := ErrorMsg{}

	if email != "asdf@gmail.com" {
		errMsg.Error = "Account does not exist"
		errMsg.ErrorField = "email"
	}

	return errMsg
}

func login(user User) (Session, ErrorMsg) {
	email := user.Email
	password := user.Password // TODO: Encrypt

	errMsg := verifyLogin(email, password) // Always return error message, assert on if empty later

	var msg = Session{
		User:    "user",
		Token:   "token",
		Expires: getExpires(),
	}

	return msg, errMsg
}
