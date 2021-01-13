import React from "react";
import { DatePicker } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";

import datePickerTheme from "./datePickerTheme";

const DatePickerComponent = ({date, setDate}) => {
  return (
    <>
      <ThemeProvider theme={datePickerTheme}>
        <DatePicker
          className="datepicker"
          format="D/M/YYYY"
          autoOk
          value={date}
          onChange={(date) => setDate(date)}
        />
      </ThemeProvider>
    </>
  );
};

export default DatePickerComponent;
