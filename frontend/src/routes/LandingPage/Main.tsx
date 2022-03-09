import React from "react";
import Button from "@mui/material/Button";
import "../../styling/landingPage.css";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

const MainButton = styled(Button)({
  minWidth: "100%",
  minHeight: "135px",
  fontSize: "60px",
  fontWeight: "200",
  lineHeight: "75px",
  textTransform: "none",
  borderRadius: "20px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
});

export default function Main() {
  return (
    <div>
      <div className="Phrase">Knowledge is power</div>
      <Container maxWidth="lg" style={{ paddingTop: "20%" }}>
        <MainButton href="/signup" variant="contained">
          Create your personalized budget
        </MainButton>
      </Container>
    </div>
  );
}
