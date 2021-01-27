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

import "./thumbnail.styles.scss";

const Thumbnail = ({ imgUrl, title, date }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.apod.selectedDate)
  const isDeleteOn = useSelector((state) => state.fav.isDeleteOn);
  const favourites = useSelector((state) => state.fav.favourites);

  const handleButton = () => {
    dispatch(setCurrentDate(date));
    history.push(`/${formatDate(selectedDate)}`);
  };

  const handleDelete = () => {
    dispatch(deleteItem(date));
  };

  return (
    <div className={isDeleteOn ? "thumbnail thumbnail--delete" : "thumbnail"}>
      <div className="thumbnail__imgbox">
        <div
          className="thumbnail__img"
          onClick={isDeleteOn ? handleDelete : handleButton}
        >
          {isImage(imgUrl) ? (
            <img src={imgUrl} alt="Nasa Thumbnail" className="image" />
          ) : (
            <img
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
