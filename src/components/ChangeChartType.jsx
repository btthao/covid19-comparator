import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  radio: {
    transform: "scale(1.2)",
    marginLeft: "0.2rem",
  },
  radioGroup: {
    marginTop: "0.8rem",
  },
}));

function ChangeChartType({ label, value, radioBtn, handleChange }) {
  const classes = useStyles();
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <Typography variant="h4" color="textSecondary">
          {label}
        </Typography>
      </FormLabel>
      <RadioGroup
        aria-label={label}
        name={label}
        value={value}
        row
        onChange={handleChange}
        className={classes.radioGroup}
      >
        {radioBtn.map((radio, index) => (
          <FormControlLabel
            value={radio}
            control={<Radio className={classes.radio} />}
            label={radio}
            key={index}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default ChangeChartType;
