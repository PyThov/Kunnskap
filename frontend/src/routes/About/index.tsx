import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

export default function About() {
  return (
    <Container>
      <Stack style={{ textAlign: "center", width: "100px", height: "50px" }}>
        <div>About Page</div>
        <Button variant="contained" href="/">
          Back
        </Button>
      </Stack>
    </Container>
  );
}
