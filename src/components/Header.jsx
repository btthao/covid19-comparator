import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, FormControlLabel, Switch } from "@material-ui/core";
import { useStateContext } from "../context";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "1.2rem 2.3rem",
    // textAlign: "center",
    borderBottom: `solid 0.1rem ${theme.palette.primary.dark} `,
    background: theme.palette.primary.dark,
    "@media (max-width: 500px)": {
      flexDirection: "column",
      padding: "2rem 2rem 1rem 2.3rem",
      alignItems: "flex-start",
    },
  },
  header__text: {
    fontSize: "2.6rem",
    fontWeight: 600,
    "@media (max-width: 800px)": {
      fontSize: "2.2rem",
    },
  },
  darkMode__label: {
    fontSize: "1.5rem",
  },
}));

function Header() {
  const [{ darkMode }, dispatch] = useStateContext();
  const changeTheme = () => {
    if (darkMode) {
      dispatch({
        type: "CHANGE_THEME",
        payload: false,
      });
    } else {
      dispatch({
        type: "CHANGE_THEME",
        payload: true,
      });
    }
  };
  const classes = useStyles();
  return (
    <Box component="nav" className={classes.nav}>
      <Typography
        variant="h1"
        color="textSecondary"
        className={classes.header__text}
      >
        Covid-19 Comparator
      </Typography>
      <FormControlLabel
        control={
          <Switch color="secondary" checked={darkMode} onChange={changeTheme} />
        }
        label={
          <Typography variant="body1" className={classes.darkMode__label}>
            Dark Mode
          </Typography>
        }
        color="primary"
      />
    </Box>
  );
}

export default Header;
