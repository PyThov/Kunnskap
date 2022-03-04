import React from "react";
import { Box, Button, ThemeProvider } from "@material-ui/core";
import { Stack } from "@mui/material"
import { theme } from "../common/constants";
import "../styling/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <ThemeProvider theme={theme}>
        {/* <Box className="Header"> */}
          <Stack className="Header" direction="row" justifyContent="space-between">
            <div className="ButtonGroup">
              <Button color="secondary" variant="contained" style={{width: "103px", borderRadius: "0px" }}>About</Button>
              <Button color="secondary" variant="contained" style={{width: "103px", borderRadius: "0px" }}>Help</Button>
            </div>
            <Box>
              <div className="Title">Kunnskap</div>
              <div className="ButtonGroup">
                <Button
                  color="primary"
                  variant="contained"
                  style={{ width: "141px", borderRadius: "0px" }}
                >
                  Login
                </Button>
                <Button color="secondary" variant="outlined" style={{ width: "141px", borderRadius: "0px" }}>
                  Sign-up
                </Button>
              </div>
            </Box>
            <div style={{width: "206px"}}/> {/* Placeholder to force title to center */}
          </Stack>
        {/* </Box> */}
      </ThemeProvider>
    </div>
  );
}
