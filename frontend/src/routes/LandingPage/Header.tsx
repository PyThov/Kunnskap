import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { IUserSession } from "../../common/types";
import { isUserLoggedIn, logoutUser } from "../../common/utils";

interface ILandingHeader {
  userSession: IUserSession;
  setUserSession: React.Dispatch<React.SetStateAction<IUserSession>>;
}

export default function Header({userSession, setUserSession}: ILandingHeader) {

  console.log("userSession:", userSession);

  const LoginButton = () => {
    return (
      <Button
        color="primary"
        variant="contained"
        style={{ width: "141px", borderRadius: "0px" }}
        href="/login"
      >
        Login
      </Button>
    )
  }

  const SignupButton = () => {
    return (
      <Button
        color="secondary"
        href="/signup"
        variant="outlined"
        style={{ width: "141px", borderRadius: "0px" }}
      >
        Sign-up
      </Button>
    )
  }

  const LogoutButton = () => {
    return (
      <Button
        color="secondary"
        variant="outlined"
        style={{ width: "141px", borderRadius: "0px" }}
        onClick={() => {
          setUserSession(logoutUser())
        }}
      >
        Logout
      </Button>
    )
  }

  const DashboardButton = () => {
    return (
      <Button
        color="primary"
        variant="contained"
        href="/dashboard"
        style={{ width: "141px", borderRadius: "0px" }}
      >
        Dashboard
      </Button>
    )
  }

  return (
    <Stack
      className="Header"
      direction="row"
      justifyContent="space-between"
      style={{ position: "fixed" }}
    >
      <div className="ButtonGroup">
        <Button
          color="secondary"
          href="/about"
          variant="contained"
          style={{ width: "103px", borderRadius: "0px" }}
        >
          About
        </Button>
        <Button
          color="secondary"
          href="/help"
          variant="contained"
          style={{ width: "103px", borderRadius: "0px" }}
        >
          Help
        </Button>
      </div>
      <Stack>
        <div className="Title">Kunnskap</div>
        <Stack direction="row" className="ButtonGroup">
          {isUserLoggedIn(userSession) ? (
            <>
              <LoginButton />
              <SignupButton />
            </>
          ) : (
            <>
              <DashboardButton />
              <LogoutButton />
            </>
          )}
        </Stack>
      </Stack>
      <div style={{ width: "206px" }} />{" "}
      {/* Placeholder to force title to center */}
    </Stack>
  );
}
