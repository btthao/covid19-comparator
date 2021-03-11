import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useStateContext } from "../context";
import numeral from "numeral";
import moment from "moment";
import { chartTheme } from "./styles";
import { tickFormat, dateFormat } from "./utilities";

function Chart({ data }) {
  const [
    { country1, country2, showWorldWide, darkMode },
    dispatch,
  ] = useStateContext();
  const color = darkMode ? "#9ea0a8" : "#293853";
  const gridColor = darkMode ? "#293853" : "#9ea0a8";

  return (
    <ResponsiveContainer width="100%" height="90%">
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 25,
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
          dataKey="date"
          tick={{ fontSize: 13, fill: `${color}` }}
          stroke={color}
          minTickGap={40}
          tickFormatter={(tick) => dateFormat(tick)}
        />
        <YAxis
          tick={{ fontSize: 13, fill: `${color}` }}
          tickFormatter={(tick) => tickFormat(tick)}
          stroke={color}
        />
        <Tooltip
          cursor={{ stroke: "white" }}
          labelStyle={{ color: "white" }}
          contentStyle={chartTheme.tooltip}
          formatter={(value) => {
            return numeral(value).format("0,0");
          }}
          labelFormatter={(value) => {
            return moment(value, "M/D/YY").format("MMM Do, YYYY");
          }}
        />
        <Legend
          iconSize={20}
          wrapperStyle={{ fontSize: "15px", fontWeight: "500" }}
        />
        {showWorldWide && (
          <Line
            dot={false}
            type="monotone"
            dataKey="Global"
            stroke={chartTheme.color.purple}
            activeDot={{ r: 5 }}
            strokeWidth={3}
          />
        )}
        {country1 && (
          <Line
            dot={false}
            type="monotone"
            dataKey={country1}
            stroke={chartTheme.color.orange}
            activeDot={{ r: 5 }}
            strokeWidth={3}
          />
        )}

        {country2 && (
          <Line
            dot={false}
            type="monotone"
            dataKey={country2}
            stroke={chartTheme.color.pink}
            activeDot={{ r: 5 }}
            strokeWidth={3}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
