import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useStateContext } from "../context";
import { RingLoader } from "react-spinners";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";

const useStyles = makeStyles((theme) => ({
  chart: {
    width: "100%",
    height: "100%",
    background: theme.palette.secondary.light,
  },
  loading: {
    width: "100%",
    height: "100%",
    background: theme.palette.secondary.light,
    display: "grid",
    placeItems: "center",
  },
  chart__area: {
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  chart__title: {
    width: "100%",
    height: "10%",
  },
}));

function Chart({ data, name }) {
  const classes = useStyles();
  const [
    { country1, country2, showWorldWide, darkMode, casesChartType },
    dispatch,
  ] = useStateContext();
  const loadColor = darkMode ? "#ffffff" : "#293853";

  if (country1 || country2 || showWorldWide) {
    return (
      <Card className={classes.chart}>
        <CardContent className={classes.chart__area}>
          <Typography variant="h4" className={classes.chart__title}>
            {name}
          </Typography>
          {casesChartType === "Line chart" ? (
            <LineChart data={data} />
          ) : (
            <AreaChart data={data} />
          )}
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className={classes.loading}>
        <RingLoader size={55} color={loadColor} />
      </Card>
    );
  }
}

export default Chart;
