import React from "react";
import {
  AreaChart,
  Area,
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
    { country1, country2, fullName1, fullName2, showWorldWide, darkMode },
    dispatch,
  ] = useStateContext();
  const color = darkMode ? "#9ea0a8" : "#293853";
  const gridColor = darkMode ? "#293853" : "#9ea0a8";

  return (
    <ResponsiveContainer width="100%" height="90%">
      <AreaChart
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
          formatter={(value, label) => {
            return [
              numeral(value).format("0,0"),
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
            return moment(value, "M/D/YY").format("MMM Do, YYYY");
          }}
        />
        <Legend
          iconSize={20}
          wrapperStyle={{ fontSize: "15px", fontWeight: "500" }}
        />
        {showWorldWide && (
          <Area
            dot={false}
            type="monotone"
            dataKey="Global"
            stroke={chartTheme.color.purple}
            fill={chartTheme.color.purple}
            activeDot={{ r: 5 }}
            strokeWidth={3}
            stackId="1"
          />
        )}
        {country1 && (
          <Area
            dot={false}
            type="monotone"
            dataKey={country1}
            stroke={chartTheme.color.orange}
            fill={chartTheme.color.orange}
            activeDot={{ r: 5 }}
            strokeWidth={3}
            stackId="1"
          />
        )}

        {country2 && (
          <Area
            dot={false}
            type="monotone"
            dataKey={country2}
            stroke={chartTheme.color.pink}
            fill={chartTheme.color.pink}
            activeDot={{ r: 5 }}
            strokeWidth={3}
            stackId="1"
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
