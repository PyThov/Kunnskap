import React from "react";
import { API_PATH, theme } from "../../common/constants";
import { SquareButton } from "../../common/components/SquareButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import { ArrowBack } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { isEmail } from "../../common/utils";
import { emailE, passwordE } from "../../common/errors";
import axios from "axios";

const textBoxVariant = "filled";

export default function Login() {
  document.body.style.backgroundColor = theme.palette.primary.main;

  const [emailError, setEmailError] = React.useState("");
  const [passError, setPassError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const formFulfilled = emailError.length + passError.length === 0 && isEmail(email) && password.length > 0;

  const checkEmail = () => {
    !isEmail(email) && setEmailError(emailE.format);
    email.length === 0 && setEmailError(emailE.empty);
  }

  const checkPassword = () => {
    password.length === 0 && setPassError(passwordE.empty);
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value)
    setEmailError("");
  }
  
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value);
    setPassError("");
  }

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent) => {
    e.preventDefault();
    const user = { email, password };

    axios.post(`${API_PATH}login`, {
      user
    }).then((response) => {
      console.log(response.data);
      if (response.data.error) {
        const error = response.data.error;
        response.data.errorField === "email" ? setEmailError(error) : setPassError(error);
      } else {
        // Store the user in localStorage (login)
        localStorage.setItem('user', JSON.stringify(response.data));

        // Redirect to dashboard
        window.location.assign("/dashboard");
      }
    })
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if(e.key === "Enter" && formFulfilled) {
      handleLogin(e);
    }
  }

  return (
    <Container onKeyPress={handleKeyPress} maxWidth="sm">
      <Box
        sx={{
          backgroundColor: "primary.contrastText",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
          borderRadius: "15px",
          marginTop: "20%",
          textAlign: "center",
        }}
      >
        {/* Back Button */}
        <Stack direction="row">
          <Fab
            aria-label="back"
            color="secondary"
            href="/"
            size="small"
            sx={{ marginTop: "10px", marginLeft: "10px" }}
          >
            <ArrowBack fontSize="large" />
          </Fab>
        </Stack>

        {/* Form */}
        <Stack spacing={5} style={{ maxWidth: "80%", margin: "auto" }}>
          <div>
            {" "}
            {/* Title */}
            <div className="Text" style={{ fontSize: "64px" }}>
              Kunnskap
            </div>
            <div
              className="Text"
              style={{ fontSize: "18px", fontStyle: "italic" }}
            >
              Sign In
            </div>
          </div>
          <TextField
            required
            id="email"
            error={emailError.length > 0}
            helperText={emailError}
            label="Email"
            type="email"
            variant={textBoxVariant}
            onChange={handleEmail}
            onBlur={checkEmail}
          />
          <TextField
            required
            id="password"
            error={passError.length > 0}
            helperText={passError}
            label="Password"
            type="password"
            variant={textBoxVariant}
            onChange={handlePassword}
            onBlur={checkPassword}
          />
          <SquareButton
            disabled={!formFulfilled}
            variant="contained"
            // href={`/dashboard/?token=${userToken}`}
            onClick={handleLogin}
            style={{ margin: "auto", marginTop: "50px", marginBottom: "50px" }}
          >
            Login
          </SquareButton>
        </Stack>
      </Box>
    </Container>
  );
}
