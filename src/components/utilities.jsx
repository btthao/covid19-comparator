import numeral from "numeral";
import moment from "moment";
export const sortData = (data) => {
  let chartData = [];
  const sortedData = Object.keys(data).sort(function (a, b) {
    return data[a] - data[b];
  });
  for (let i = 0; i < sortedData.length; i++) {
    let dataPoint = {
      date: sortedData[i],
      number: data[sortedData[i]],
    };
    chartData.push(dataPoint);
  }
  return chartData;
};

export const tickFormat = (tick) => {
  if (tick >= 1000) {
    return numeral(tick).format("0.0a");
  } else {
    return tick;
  }
};

export const dateFormat = (tick) => {
  return moment(tick, "M/D/YY").format("D/M/YY");
};
