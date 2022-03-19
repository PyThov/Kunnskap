import React from "react";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import "../styling/App.css";
import { api } from "../common/utils";
import axios from "axios";
import { IUserSession } from "../common/types";

export default function Test() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loginData, setLoginData] = useState<IUserSession>();
  const [registerData, setRegisterData] = useState<IUserSession>();

  const testLogin = () => {
    axios.post(api("login"), {
      email: "asdf@gmail.com", password: "asdfASDF1!"
    }).then((response) => {
      console.log(response.data);
      const newData = {
        user: response.data.user,
        token: response.data.token,
        expires: new Date(response.data.expires),
      }
      console.log(newData)
      setLoginData(newData)
      setIsLoaded(true)
    })
  }
  
  const testRegister = () => {
    axios.post(api("register"), {
      firstname: "noah",
      email: "asdf@gmail.com",
      password: "asdfASDF1!",
    }).then((response) => {
      console.log(response.data)
      const newData = {
        user: response.data.user,
        token: response.data.token,
        expires: new Date(response.data.expires),
      }
      console.log(newData)
      setRegisterData(newData)
    })
  }

  useEffect(() => {
    // !loginData && testLogin();
    testRegister()
  })


  return (
    <div className="App-header">
      <div className="response">
        {!isLoaded ? <div>Loading...</div> : <div>Done.</div>}
      </div>
      <Button color="secondary" href="/" variant="outlined">
        Back
      </Button>
    </div>
  );
}
