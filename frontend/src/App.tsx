import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import LandingPage from "./routes/LandingPage";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import About from "./routes/About";
import Help from "./routes/Help";
import Test from "./routes/test";
import { theme } from "./common/constants";
import { makeServer } from "./testing/mocking/mock-server.js"

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" })
// }

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
