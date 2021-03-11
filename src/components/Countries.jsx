import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { useStateContext } from "../context";
import ChangeChartType from "./ChangeChartType";
import { excludeList } from "./excludeList";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "35rem",
    background: theme.palette.primary.main,
    minHeight: "100vh",
    height: "100%",
    "@media (max-width: 800px)": {
      width: "100%",
      height: "fit-content",
      minHeight: "30rem",
    },
  },
  formBox: {
    marginTop: "0.5rem",
  },
  formControl: {
    marginBottom: "1.2rem",
    width: "85%",
    maxWidth: "40rem",
  },
  select__countries: {
    background: theme.palette.secondary.light,
    height: "4rem",
    fontSize: "1.6rem",
  },
  select__items: {
    color: theme.palette.text.secondary,
    fontSize: "1.5rem",
  },
  checkbox: {
    color: theme.palette.text.primary,
    transform: "scale(1.4)",
    marginLeft: "0.4rem",
  },
  box: {
    width: "100%",
    borderBottom: `0.1rem solid ${theme.palette.primary.light}`,
    padding: "2.2rem 2.3rem 1.8rem",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function Countries() {
  const [
    { casesChartType, overviewChartType, showWorldWide },
    dispatch,
  ] = useStateContext();
  const [countries, setCountries] = useState([]);
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const exclude = excludeList;

  // get list of all countries for the dropdown
  useEffect(() => {
    const getCountryList = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await response.json();
      const filtered = data.filter(
        (country) => !exclude.includes(country.country)
      );
      const countries = filtered.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));
      setCountries(countries);
    };
    getCountryList();
  }, []);

  const changeCountry = (e, country) => {
    const value = e.target.value;
    const fullName = e.currentTarget.textContent;

    if (value !== country1 && value !== country2) {
      country == "country1" ? setCountry1(value) : setCountry2(value);
      dispatch({
        type: "SET_COUNTRY",
        payload: {
          country: country,
          name: value,
          fullName,
        },
      });
    } else {
      alert(
        "This country is already on the charts. Please choose a different one!"
      );
    }
  };

  const showWorld = (e) => {
    dispatch({
      type: "SHOW_WORLDWIDE",
      payload: e.target.checked,
    });
  };

  const handleChangeChartType = (e) => {
    dispatch({
      type: "CHART_TYPE",
      payload: {
        chart: e.currentTarget.name,
        type: e.target.value,
      },
    });
  };

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.box}>
        <Typography variant="h4" color="textSecondary">
          Select Countries
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              className={classes.checkbox}
              color="secondary"
              onChange={showWorld}
              name="worldwide"
              checked={showWorldWide}
            />
          }
          label={
            <Typography variant="h5" color="textPrimary">
              Worldwide Data
            </Typography>
          }
          style={{ marginTop: "1.3rem", marginBottom: "0.6rem" }}
        />
        <Box className={classes.formBox}>
          <FormControl className={classes.formControl}>
            <InputLabel>
              <Typography variant="h5" color="textPrimary">
                Country 1
              </Typography>
            </InputLabel>
            <Select
              value={country1}
              onChange={(e) => changeCountry(e, "country1")}
              className={classes.select__countries}
              color="secondary"
            >
              {countries.map((country, index) => (
                <MenuItem
                  key={index}
                  className={classes.select__items}
                  value={country.value}
                >
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>
              <Typography variant="h5" color="textPrimary">
                Country 2
              </Typography>
            </InputLabel>
            <Select
              value={country2}
              onChange={(e) => changeCountry(e, "country2")}
              className={classes.select__countries}
              color="secondary"
            >
              {countries.map((country, index) => (
                <MenuItem
                  key={index}
                  className={classes.select__items}
                  value={country.value}
                >
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            style={{ fontSize: "12px", marginTop: "0.5rem" }}
          >
            Countries/ territories without daily updated data have been excluded
            from this list. <br />
            Data source: &nbsp;
            <a
              href="https://disease.sh/"
              rel="noreferrer"
              target="_blank"
              className={classes.link}
            >
              disease.sh
            </a>
          </Typography>
        </Box>
      </Box>
      <Box className={classes.box}>
        <ChangeChartType
          label="Cases Charts"
          value={casesChartType}
          radioBtn={["Line chart", "Area chart"]}
          handleChange={handleChangeChartType}
        />
      </Box>
      <Box className={classes.box}>
        <ChangeChartType
          label="Overview Chart"
          value={overviewChartType}
          radioBtn={["Bar chart", "Stacked Bar"]}
          handleChange={handleChangeChartType}
        />
      </Box>
    </Box>
  );
}

export default Countries;
