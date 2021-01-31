import React, {useEffect} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { ThemeProvider } from "@material-ui/styles";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setToastOpen, deleteToast } from "../../redux/toasts/toasts.actions";

// Theme
import alertTheme from "./alertTheme";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Toasts = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.toasts.toast);
  const selectedDate = useSelector((state) => state.apod.selectedDate);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
     return;
    }

    dispatch(setToastOpen(false));
  };

  useEffect(() => {
    dispatch(deleteToast());

  }, [selectedDate])

  return (
    <ThemeProvider theme={alertTheme}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={state.isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={state.type}>
          {state.msg}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default Toasts;

/*
        <Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert>

*/
