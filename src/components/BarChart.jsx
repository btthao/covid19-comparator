import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { chartTheme } from "./styles";
import { useStateContext } from "../context";
import numeral from "numeral";
import { RingLoader } from "react-spinners";
import { tickFormat } from "./utilities";

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

function Chart() {
  const classes = useStyles();
  const [
    {
      country1,
      country2,
      fullName1,
      fullName2,
      showWorldWide,
      darkMode,
      overviewChartType,
    },
    dispatch,
  ] = useStateContext();
  const color = darkMode ? "#9ea0a8" : "#293853";
  const gridColor = darkMode ? "#293853" : "#9ea0a8";
  const loadColor = darkMode ? "#ffffff" : "#293853";
  const [data, setData] = useState([]);
  const [worldData, setWorldData] = useState({});
  const [country1Data, setCountry1Data] = useState({});
  const [country2Data, setCountry2Data] = useState({});

  const fetchWorldwideData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    const data = await response.json();
    const chartData = {
      name: "Global",
      Cases: data.casesPerOneMillion,
      Deaths: data.deathsPerOneMillion,
      Recovered: data.recoveredPerOneMillion,
    };
    setWorldData(chartData);
  };
  const fetchCountryData = async (country) => {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/countries/${country}`
    );
    const data = await response.json();
    const chartData = {
      name: data.country,
      Cases: data.casesPerOneMillion,
      Deaths: data.deathsPerOneMillion,
      Recovered: data.recoveredPerOneMillion,
    };
    country === country1
      ? setCountry1Data(chartData)
      : setCountry2Data(chartData);
  };

  useEffect(() => {
    fetchWorldwideData();
  }, []);

  useEffect(() => {
    country1 && fetchCountryData(country1);
    country2 && fetchCountryData(country2);
  }, [country1, country2]);

  useEffect(() => {
    const chartData = () => {
      let data = [];
      const list = ["Cases", "Deaths", "Recovered"];
      for (let i = 0; i < list.length; i++) {
        data[i] = new Object();
        data[i].name = list[i];
        data[i].Global = showWorldWide ? worldData[list[i]] : null;
        data[i][country1] = country1Data ? country1Data[list[i]] : null;
        data[i][country2] = country2Data ? country2Data[list[i]] : null;
      }
      setData(data);
    };

    chartData();
  }, [worldData, country1Data, country2Data, showWorldWide]);

  if (country1 || country2 || showWorldWide) {
    return (
      <Card className={classes.chart}>
        <CardContent className={classes.chart__area}>
          <Typography variant="h4" className={classes.chart__title}>
            Overview <br />
            <Typography variant="body1" style={{ fontSize: "14px" }}>
              (per one million)
            </Typography>
          </Typography>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              data={data}
              margin={{
                top: 15,
                right: 20,
                left: 5,
                bottom: 10,
              }}
            >
              <CartesianGrid
                stroke={gridColor}
                strokeDasharray="2 0"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 13, fill: `${color}` }}
                stroke={color}
              />
              <YAxis
                tickFormatter={(tick) => tickFormat(tick)}
                tick={{ fontSize: 13, fill: `${color}` }}
                stroke={color}
              />
              <Tooltip
                cursor={{ fill: "rgba(86, 109, 153, 0.6)" }}
                labelStyle={{ color: "white" }}
                contentStyle={chartTheme.tooltip}
                formatter={(value, label) => {
                  return [
                    `${value >= 1000 ? numeral(value).format("0,0") : value}`,
                    `${
                      label == country1
                        ? fullName1
                        : label == country2
                        ? fullName2
                        : label
                    }`,
                  ];
                }}
                labelFormatter={(value) => {
                  return value + " /1M pop";
                }}
              />
              <Legend
                iconSize={20}
                wrapperStyle={{ fontSize: "15px", fontWeight: "500" }}
              />
              {showWorldWide && (
                <Bar
                  dataKey="Global"
                  stackId={overviewChartType === "Stacked Bar" && "a"}
                  fill={chartTheme.color.purple}
                />
              )}

              {country1 && (
                <Bar
                  dataKey={country1}
                  stackId={overviewChartType === "Stacked Bar" && "a"}
                  fill={chartTheme.color.orange}
                />
              )}
              {country2 && (
                <Bar
                  dataKey={country2}
                  stackId={overviewChartType === "Stacked Bar" && "a"}
                  fill={chartTheme.color.pink}
                />
              )}
            </BarChart>
          </ResponsiveContainer>
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
