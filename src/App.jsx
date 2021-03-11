import "./App.css";
import React from "react";
import { useStateContext } from "./context";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import Main from "./components/Main";

const light = {
  palette: {
    primary: {
      main: "#CBCCD1",
      light: "#9fa3af",
      dark: "#babdc5",
    },
    secondary: {
      main: "#9d7bee",
      light: "rgba(120, 133, 168, 0.1)",
    },
    background: {
      default: "#D4D5D8",
    },
    text: {
      primary: "#2d3d5e",
      secondary: "#262c38",
    },
  },
};
const dark = {
  palette: {
    primary: {
      main: "#213141",
      light: "#2f557c",
      dark: "#172736",
    },
    secondary: {
      main: "#9d7bee",
      light: "rgba(89,115,135, 0.2)",
    },
    background: {
      default: "#283c50",
    },
    text: {
      primary: "#fcfcfc",
      secondary: "#578fb1",
    },
  },
};

function App() {
  const [{ darkMode }, dispatch] = useStateContext();
  const theme = createMuiTheme(darkMode ? dark : light);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
