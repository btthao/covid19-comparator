import React from "react";
import "../App.css";
import ChartsArea from "./ChartsArea";
import Countries from "./Countries";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main__container: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "35rem 1fr",
    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr",
    },
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <Box className={classes.main__container}>
      <Countries></Countries>
      <ChartsArea></ChartsArea>
    </Box>
  );
}

export default Main;
