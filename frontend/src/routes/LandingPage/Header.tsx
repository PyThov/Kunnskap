import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Header() {
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
          <Button
            color="primary"
            variant="contained"
            style={{ width: "141px", borderRadius: "0px" }}
            href="/login"
          >
            Login
          </Button>
          <Button
            color="secondary"
            href="/signup"
            variant="outlined"
            style={{ width: "141px", borderRadius: "0px" }}
          >
            Sign-up
          </Button>
        </Stack>
      </Stack>
      <div style={{ width: "206px" }} />{" "}
      {/* Placeholder to force title to center */}
    </Stack>
  );
}
