import { createMuiTheme } from "@material-ui/core";

const closeIconTheme = createMuiTheme({
    overrides: {
        MuiSvgIcon: {
            root: {
                '&:hover': {
                    fill: "red"
                  }
            }
        }
    }
})
export default closeIconTheme
