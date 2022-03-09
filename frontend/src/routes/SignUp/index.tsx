import React from "react";
import { theme } from "../../common/constants";
import { ArrowBack } from "@mui/icons-material";
import { SquareButton } from "../../common/components/SquareButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { emailE, emptyField, passwordE } from "../../common/errors";
import { isEmail } from "../../common/utils";
import axios from "axios";

interface IValue {
  [key: string]: string
}

const textBoxVariant = "standard";
const initialValues: IValue = {
  firstName: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  reason: "",
}

const requiredValues = [
  "firstName",
  "email",
  "confirmEmail",
  "password",
  "confirmPassword",
]


export default function SignUp() {
  document.body.style.backgroundColor = theme.palette.primary.main;

  const [values, setValues] = React.useState<IValue>(initialValues);
  const [errors, setErrors] = React.useState<IValue>(initialValues);
  const [showPassword, setShowPassword] = React.useState(false);

  // Returns true if there are any errors
  const checkForErrors = () => {
    let isError = false;

    Object.values(errors).forEach((err) => {
      if(err !== "") {
        isError = true;
        return isError;
      }
    })
    return isError;
  }

  const isComplete = (field: string) => {
    return errors[field] === "" && values[field] !== "";
  }

  // Returns true if all required params are filled
  const isFilled = () => {
    for (const [key, value] of Object.entries(values)) {
      if(requiredValues.includes(key) && value === "") {
        return false;
      }
    }
    return true;
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    setValues({
      ...values,
      [id]: value,
    })
    
    if(!["reason", "lastName"].includes(id)) {
      if(value.length === 0){
        setErrors({
          ...errors,
          [id]: emptyField,
        })
        return;
      }
    }

    let error = "";
    switch(id) {
      case "password":
        if (value.length < 8) { // Test length
          error = passwordE.chars;
        } else if (!/[a-z]/.test(value)){ // Test lower case
          error = passwordE.lower;
        } else if (!/[A-Z]/.test(value)){ // Test upper case
          error = passwordE.upper;
        } else if (!/\d/.test(value)){ // Test number
          error = passwordE.number;
        } else if (!/\W/.test(value)){ // Test special
          error = passwordE.special;
        };
        break;
      case "confirmPassword":
        if (value !== values.password) { // Check that passwords match
          error = passwordE.match;
        }
        break;
    }

    setErrors({
      ...errors,
      [id]: error,
    })
  }

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    axios.post("api/register", {user: values}).then((response) => {
      console.log(response.data);
      if(response.data.error) {
        setErrors({
          ...errors,
          [response.data.errorField]: response.data.error,
        })
      } else {
        // Store the user in localStorage (login)
        localStorage.setItem('user', JSON.stringify(response.data));

        // Redirect to dashboard
        window.location.assign("/dashboard");
      }
    })
  }

  return (
    <Container maxWidth="sm">
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
            {/* Title */}
            <div className="Text" style={{ fontSize: "64px" }}>
              Kunnskap
            </div>
            <div
              className="Text"
              style={{ fontSize: "18px", fontStyle: "italic" }}
            >
              Register
            </div>
          </div>

          {/* Name */}
          <Stack direction="row" justifyContent="space-between">
            <TextField
              required
              id="firstName"
              label="First Name"
              error={errors.firstName.length > 0}
              helperText={errors["firstName"]}
              variant={textBoxVariant}
              onChange={handleInput}
            />
            {isComplete("firstName") && <TextField
              id="lastName"
              label="Last Name"
              error={errors.lastName.length > 0}
              helperText={errors["lastName"]}
              variant={textBoxVariant}
              onChange={handleInput}
            />}
          </Stack>

          {/* Email */}
          <TextField
            required
            id="email"
            label="Email"
            type="email"
            error={errors.email.length > 0}
            helperText={errors["email"]}
            variant={textBoxVariant}
            onChange={handleInput}
            onBlur={() => {!isEmail(values.email) && setErrors({
              ...errors,
              ["email"]: emailE.format,
            })}}
          />
          {isComplete("email") && isEmail(values.email) && <TextField
            required
            id="confirmEmail"
            label="Confirm Email"
            type="email"
            error={errors.confirmEmail.length > 0}
            helperText={errors["confirmEmail"]}
            variant={textBoxVariant}
            onChange={handleInput}
            onBlur={() => {values.email !== values.confirmEmail && setErrors({
              ...errors,
              ["confirmEmail"]: emailE.match,
            })}}
          />}

          {/* Password */}
          {/* TODO: Disable 'confirmPassword' while 'password' criteria has not been met */}
          <Stack direction="row" justifyContent="space-between">
            <TextField
              required
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              error={errors.password.length > 0}
              helperText={errors["password"]}
              variant={textBoxVariant}
              onChange={handleInput}
              onMouseEnter={() => {setShowPassword(true)}}
              onMouseLeave={() => {setShowPassword(false)}}
            />
            {isComplete("password") && <TextField
              required
              id="confirmPassword"
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              error={errors.confirmPassword.length > 0}
              helperText={errors["confirmPassword"]}
              variant={textBoxVariant}
              onChange={handleInput}
              onMouseEnter={() => {setShowPassword(true)}}
              onMouseLeave={() => {setShowPassword(false)}}
            />}
          </Stack>

          {/* Reason for joining */}
          <FormControl>
            <InputLabel id="reason-label">
              What brings you to Kunnskap?
            </InputLabel>
            <Select
              labelId="reason-label"
              id="reason"
              label="What brings you to Kunnskap?"
              value={values.reason}
              error={errors.reason.length > 0}
              onChange={(e) => {setValues({
                ...values,
                 reason: e.target.value,
              })}}
            >
              <MenuItem value="test">Test</MenuItem>
            </Select>
          </FormControl>

          {/* Register */}
          <SquareButton
            disabled={checkForErrors() || !isFilled()}
            variant="contained"
            // href={"/dashboard"}
            onClick={handleRegister}
            style={{ margin: "auto", marginTop: "50px", marginBottom: "50px" }}
          >
            Register
          </SquareButton>
        </Stack>
      </Box>
    </Container>
  );
}
