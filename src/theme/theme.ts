import { createTheme } from "@mui/material/styles";
import "./theme.types";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
      light: "#333333",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9c27b0",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#71717A",
      disabled: "#A1A1AA",
    },
    divider: "#e0e0e0",
    json: {
      key: "#82D2CE",
      value: "#E394DC",
      bracket: "#FFFF00",
      array: "#E394DC"
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
