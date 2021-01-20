import React from "react";
import { DatePicker } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";

import moment from "moment"

import datePickerTheme from "./datePickerTheme";

const DatePickerComponent = ({date, setDate, maxDate}) => {
  return (
    <>
      <ThemeProvider theme={datePickerTheme}>
        <DatePicker
          className="datepicker"
          format="D/M/YYYY"
          autoOk
          maxDate={moment()}
          minDate={moment("1995-06-20")}
          value={date}
          showTodayButton={true}
          onChange={(date) => setDate(date)}
        />
      </ThemeProvider>
    </>
  );
};

export default DatePickerComponent;


// Last Day is 1995-06-20