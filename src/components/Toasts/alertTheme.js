import { createMuiTheme } from "@material-ui/core";

const alertTheme = createMuiTheme({
    overrides: {
      MuiAlert: {
        message: {
          fontFamily: "Moon-Regular",
          letterSpacing: "1px",
          fontSize: "18px"
        },
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      },
    },
  });

export default alertTheme;