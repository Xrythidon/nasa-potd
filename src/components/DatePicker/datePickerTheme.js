import grey from "@material-ui/core/colors/grey";
import { createMuiTheme } from "@material-ui/core";

const datePickerTheme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        color: "#afb7d1",
      },
    },
    MuiInputBase: {
      input: {
        fontFamily: "moon-regular",
        letterSpacing: "2px",
        color: "#afb7d1",
        fontSize: "24px",
        borderBottom: "2px solid #afb7d1",
        marginTop: "15px",
        cursor: "pointer"
      },
      root: {
        color: "#afb7d1",
      },
    },
    MuiInput: {
      underline: {
        "&:after": {
          borderBottom: "2px solid #d5dae7",
        },
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#14161E",
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {},
    },
    MuiPickersDay: {
      day: {
        color: "#14161E",
      },
      daySelected: {
        backgroundColor: "#2f323f",
      },
      dayDisabled: {
        color: "797e91",
      },
      current: {
        color: "black",
        backgroundColor: grey[300],
      },
    },
  },
});
export default datePickerTheme;
