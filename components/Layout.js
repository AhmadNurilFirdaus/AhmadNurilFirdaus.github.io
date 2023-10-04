import React, { useContext } from "react";
import { DarkContext } from "../context/DarkMode";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

export default function Layout({ children }) {
  const classes = useStyles();
  const context = useContext(DarkContext);
  const { theme, toggleDarkTheme } = context;

  const muiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={muiTheme}>
      {theme.palette.type === "dark" ? (
        <Box variant="div" className={classes.dark}>
          <Navbar theme={theme} toggleDarkTheme={toggleDarkTheme} />
          <>{children}</>
          <Footer />
        </Box>
      ) : (
        <Box variant="div" className={classes.light}>
          <Navbar theme={theme} toggleDarkTheme={toggleDarkTheme} />
          <>{children}</>
          <Footer />
        </Box>
      )}
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles(() => ({
  light: {
    width: "100vw",
    height: "100vh",
    background:
      "linear-gradient(30deg, rgba(57, 200, 105, 0.7), rgba(50, 50, 50, 0.7), rgba(3, 155, 229, 0.7)), url('/image/Background.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    overflowX: "hidden",
    overflowY: "hidden",
    animation: `$myEffect 1000ms`,
  },
  dark: {
    width: "100vw",
    height: "100vh",
    background:
      "linear-gradient(to bottom, rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.8)), url('/image/Background.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    overflowX: "hidden",
    overflowY: "hidden",
    animation: `$myEffect 2000ms`,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0.9,
    },
    "100%": {
      opacity: 1,
    },
  },
}));
