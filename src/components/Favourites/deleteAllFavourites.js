import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToast } from "../../redux/toasts/toasts.actions";
import { deleteAllItems } from "../../redux/favourites/favourite.actions";

// Modal Styles
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import "./modal.styles.scss";

const DeleteAllFavourites = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllItems());
    dispatch(setToast("error", "Deleted all favourites!"))

  };

  return (
    <>
      <button
        onClick={handleClickOpen}
        className="btn favs__btn favs__btn--all"
      >
        Delete All
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h3 className="modal__title" id="alert-dialog-title">
          {"Are you sure?"}
        </h3>
        <DialogContent>
          <p className="modal__text" id="alert-dialog-description">
            This process cannot be undone.
          </p>
        </DialogContent>
        <div className="modal__btnContainer">
          <button
            className="btn favs__btn favs__btn--delete"
            onClick={() => {
              handleDeleteAll();
              handleClose();
            }}
            color="primary"
            autoFocus
          >
            Delete
          </button>
          <button
            className="btn favs__btn favs__btn--cancel"
            onClick={handleClose}
            color="primary"
          >
            Cancel
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default DeleteAllFavourites;
