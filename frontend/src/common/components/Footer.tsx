import React from "react";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100px",
        left: 0,
        bottom: 0,
        backgroundColor: "secondary.main",
      }}
    ></Box>
  );
}
