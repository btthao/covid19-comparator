export const initialState = {
  darkMode: true,
  country1: "",
  country2: "",
  fullName1: "",
  fullName2: "",
  showWorldWide: true,
  casesChartType: "Line chart",
  overviewChartType: "Bar chart",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        darkMode: action.payload,
      };
    case "SHOW_WORLDWIDE":
      return {
        ...state,
        showWorldWide: action.payload,
      };
    case "CHART_TYPE": {
      let casesType = state.casesChartType;
      let overviewType = state.overviewChartType;

      if (action.payload.chart == "Cases Charts") {
        casesType = action.payload.type;
      }

      if (action.payload.chart == "Overview Chart") {
        overviewType = action.payload.type;
      }

      return {
        ...state,
        casesChartType: casesType,
        overviewChartType: overviewType,
      };
    }

    case "SET_COUNTRY": {
      let newCountry1 = state.country1;
      let newCountry2 = state.country2;
      let newFullname1 = state.fullName1;
      let newFullname2 = state.fullName2;
      if (action.payload.country === "country1") {
        newCountry1 = action.payload.name;
        newFullname1 = action.payload.fullName;
      } else {
        newCountry2 = action.payload.name;
        newFullname2 = action.payload.fullName;
      }
      return {
        ...state,
        country1: newCountry1,
        country2: newCountry2,
        fullName1: newFullname1,
        fullName2: newFullname2,
      };
    }

    default:
      return state;
  }
};
