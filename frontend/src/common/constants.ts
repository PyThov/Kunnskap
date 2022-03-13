import { createTheme } from "@mui/material/styles";

export const API_PATH = `${process.env.NODE_ENV === "development" && "http://localhost:4000"}/api/`;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#43a047",
      light: "#76d275",
      dark: "#00701a",
      contrastText: "#fff",
    },
    secondary: {
      main: "#424242",
      light: "#6d6d6d",
      dark: "#1b1b1b",
      contrastText: "#fff",
    },
    info: {
      main: "#e3f2fd",
      light: "#ffffff",
      dark: "#b1bfca",
      contrastText: "#000",
    },
  },
});

export const colors = {
  green: "#2BAE66",
};

export const emptyUser = {
    "user": "",
    "token": "",
};
