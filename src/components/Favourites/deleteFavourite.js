import React, { useState, useEffect } from "react";

const DeleteFavourite = () => {
  const [deletePressed, setDeletePressed] = useState(false);

  useEffect(() => {
    console.log(deletePressed);
  }, [deletePressed]);

  return (
    <button
      onClick={() => setDeletePressed(!deletePressed)}
      className={deletePressed ? "btn favs__btn favs__btn--delete" : "btn favs__btn"}
    >
      Delete{" "}
    </button>
  );
};

export default DeleteFavourite;
