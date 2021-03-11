import React, { useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CaseChart from "./CaseChart";
import BarChart from "./BarChart";
import { useStateContext } from "../context";
import { sortData } from "./utilities";
import { PacmanLoader } from "react-spinners";

const useStyles = makeStyles((theme) => ({
  charts__container: {
    padding: "5%",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },

  loading__container: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "120px",
    height: "50px",
  },
  grid__item: {
    width: "100%",
    minHeight: "40rem",
    height: "40vh",
  },
  item__overview: {
    width: "100%",
    minHeight: "70rem",
    height: "70vh",
  },
}));

function ChartsArea() {
  const classes = useStyles();
  const [didMount, setDidMount] = useState(false);
  const [loading, setLoading] = useState(true);
  // chart data
  const [casesData, setCasesData] = useState([]);
  const [deathsData, setDeathsData] = useState([]);
  // cases data
  const [worldCasesData, setWorldCasesData] = useState([]);
  const [country1CasesData, setCountry1CasesData] = useState([]);
  const [country2CasesData, setCountry2CasesData] = useState([]);
  // deaths data
  const [worldDeathsData, setWorldDeathsData] = useState([]);
  const [country1DeathsData, setCountry1DeathsData] = useState([]);
  const [country2DeathsData, setCountry2DeathsData] = useState([]);

  const [
    { country1, country2, showWorldWide, darkMode },
    dispatch,
  ] = useStateContext();
  const loadColor = darkMode ? "#ffffff" : "#293853";

  const fetchCountryData = async (country, type) => {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`
    );
    const data = await response.json();
    if (response.ok) {
      const sortedData = sortData(data.timeline[type]);
      if (type === "cases") {
        country == country1
          ? setCountry1CasesData(sortedData)
          : setCountry2CasesData(sortedData);
      } else {
        country == country1
          ? setCountry1DeathsData(sortedData)
          : setCountry2DeathsData(sortedData);
      }
    } else {
      if (country == country1) {
        setCountry1CasesData([]);
        setCountry1DeathsData([]);
        dispatch({
          type: "SET_COUNTRY",
          payload: {
            country: "country1",
            name: "",
          },
        });
      } else {
        setCountry2CasesData([]);
        setCountry2DeathsData([]);
        dispatch({
          type: "SET_COUNTRY",
          payload: {
            country: "country2",
            name: "",
          },
        });
      }
      alert("There's no data for this country. Please choose another one.");
    }
  };

  const fetchWorldwideData = async (type) => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const data = await response.json();
    const sortedData = sortData(data[type]);
    type === "cases"
      ? setWorldCasesData(sortedData)
      : setWorldDeathsData(sortedData);
  };

  // initial fetch worldwide data
  useEffect(() => {
    fetchWorldwideData("cases");
    fetchWorldwideData("deaths");
    setDidMount(true);
  }, []);

  // render whenever user changes country
  useEffect(() => {
    if (didMount) {
      country1 && fetchCountryData(country1, "cases");
      country1 && fetchCountryData(country1, "deaths");
    }
  }, [country1]);

  useEffect(() => {
    if (didMount) {
      country2 && fetchCountryData(country2, "cases");
      country2 && fetchCountryData(country2, "deaths");
    }
  }, [country2]);

  // update new data when changes countries
  useEffect(() => {
    const updateCasesData = () => {
      let chartData = [];
      for (let i = 0; i < worldCasesData.length; i++) {
        chartData[i] = new Object();
        chartData[i].date = worldCasesData[i].date;
        chartData[i].Global = showWorldWide ? worldCasesData[i].number : null;
        chartData[i][country1] =
          country1CasesData.length > 0 ? country1CasesData[i].number : null;
        chartData[i][country2] =
          country2CasesData.length > 0 ? country2CasesData[i].number : null;
      }
      setCasesData(chartData);
    };

    const updateDeathsData = () => {
      let chartData = [];
      for (let i = 0; i < worldDeathsData.length; i++) {
        chartData[i] = new Object();
        chartData[i].date = worldDeathsData[i].date;
        chartData[i].Global = showWorldWide ? worldDeathsData[i].number : null;
        chartData[i][country1] =
          country1DeathsData.length > 0 ? country1DeathsData[i].number : null;
        chartData[i][country2] =
          country2DeathsData.length > 0 ? country2DeathsData[i].number : null;
      }
      setDeathsData(chartData);
    };

    updateCasesData();
    updateDeathsData();
    return () => {
      setLoading(false);
    };
  }, [
    worldCasesData,
    worldDeathsData,
    country1CasesData,
    country1DeathsData,
    country2CasesData,
    country2DeathsData,
    showWorldWide,
  ]);

  return (
    <Box className={classes.charts__container}>
      {loading && (
        <Box className={classes.loading__container}>
          <PacmanLoader color={loadColor} />
        </Box>
      )}
      {!loading && (
        <Grid container spacing={6}>
          <Grid item xs={12} lg={6} className={classes.grid__item}>
            <CaseChart data={casesData} name="Total Cases" />
          </Grid>
          <Grid item xs={12} lg={6} className={classes.grid__item}>
            <CaseChart data={deathsData} name="Total Deaths" />
          </Grid>
          <Grid item xs={12} className={classes.item__overview}>
            <BarChart />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default ChartsArea;
