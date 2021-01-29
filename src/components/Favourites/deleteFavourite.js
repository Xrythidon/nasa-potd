import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {setDelete} from "../../redux/favourites/favourite.actions";

const DeleteFavourite = () => {
  const dispatch = useDispatch();
  const [deletePressed, setDeletePressed] = useState(false);

  useEffect(() => {
    dispatch(setDelete(deletePressed));
  }, [deletePressed, dispatch]);

  return (
    <button
      onClick={() => setDeletePressed(!deletePressed)}
      className={
        deletePressed ? "btn favs__btn favs__btn--delete" : "btn favs__btn"
      }
    >
      Delete{" "}
    </button>
  );
};

export default DeleteFavourite;
