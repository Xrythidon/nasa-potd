import React from "react";
import { useSelector, useDispatch } from "react-redux";

import youtube2Thumbnail from "../Utilities/youtube2Thumbnail";
import isImage from "../Utilities/isImage";
import formatDate from "../Utilities/formatDate";

// Routing
import { useHistory } from "react-router-dom";

// Actions
import { setCurrentDate } from "../../redux/apod/apod.actions";
import { deleteItem } from "../../redux/favourites/favourite.actions";
import { setToast } from "../../redux/toasts/toasts.actions";

import "./thumbnail.styles.scss";

const Thumbnail = ({ imgUrl, title, date }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const isDeleteOn = useSelector((state) => state.fav.isDeleteOn);

  const handleButton = () => {
    dispatch(setCurrentDate(date));
    history.push(`/${formatDate(date)}`);
    console.log("touch thumbnail");
  };

  const handleDelete = () => {
    dispatch(deleteItem(date));
    dispatch(setToast("error", `Deleted from favourites "${title}"`));
  };

  return (
    <div className={isDeleteOn ? "thumbnail thumbnail--delete" : "thumbnail"}>
      <div className="thumbnail__imgbox">
        <div
          className="thumbnail__img"
          loading="lazy"
          alt="Nasa Thumbnail"
          onClick={isDeleteOn ? handleDelete : handleButton}
        >
          {isImage(imgUrl) ? (
            <img src={imgUrl} alt="Nasa Thumbnail" className="image" />
          ) : (
            <img
              loading="lazy"
              src={youtube2Thumbnail(imgUrl)}
              alt="Nasa Thumbnail"
              className="image"
            />
          )}
          {isDeleteOn && (
            <span className="remove-image" href="#">
              &#215;
            </span>
          )}
        </div>
      </div>
      <h3 className="thumbnail__title">{title}</h3>
      <p className="thumbnail__date">{date}</p>
    </div>
  );
};

export default Thumbnail;

/* 

        <ThemeProvider theme={closeIconTheme}>
          <CloseIcon
            style={{
              color: "black",
              position: "absolute",
              top: "-15px",
              right: "-15px",
              fontSize: "10rem",
            }}
          />
        </ThemeProvider>
*/
