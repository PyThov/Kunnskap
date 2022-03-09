import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import React from "react";

export default function Help() {
  return (
    <Container>
      <Stack style={{ textAlign: "center", width: "100px", height: "50px" }}>
        <div>Help Page</div>
        <Button variant="contained" href="/">
          Back
        </Button>
      </Stack>
    </Container>
  );
}
