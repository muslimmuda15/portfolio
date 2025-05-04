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
      array: "#E394DC",
    },
  },
  typography: {
    fontFamily: "var(--font-source-code-pro)",
    h1: {
      fontFamily: "var(--font-source-code-pro)",
    },
    h2: {
      fontFamily: "var(--font-source-code-pro)",
    },
    h3: {
      fontFamily: "var(--font-source-code-pro)",
    },
    h4: {
      fontFamily: "var(--font-source-code-pro)",
    },
    h5: {
      fontFamily: "var(--font-source-code-pro)",
    },
    h6: {
      fontFamily: "var(--font-source-code-pro)",
    },
    subtitle1: {
      fontFamily: "var(--font-source-code-pro)",
    },
    subtitle2: {
      fontFamily: "var(--font-source-code-pro)",
    },
    body1: {
      fontFamily: "var(--font-source-code-pro)",
    },
    body2: {
      fontFamily: "var(--font-source-code-pro)",
    },
    button: {
      fontFamily: "var(--font-source-code-pro)",
    },
    caption: {
      fontFamily: "var(--font-source-code-pro)",
    },
    overline: {
      fontFamily: "var(--font-source-code-pro)",
    },
  },
});
