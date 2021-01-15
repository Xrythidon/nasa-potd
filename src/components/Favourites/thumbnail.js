import React from "react";
import { useSelector, useDispatch } from "react-redux";

import youtube2Thumbnail from "../Utilities/youtube2Thumbnail";
import isImage from "../Utilities/isImage";

// Actions
import { fetchImage, setCurrentDate } from "../../redux/apod/apod.actions";

import { ThemeProvider } from "@material-ui/styles";

import CloseIcon from "@material-ui/icons/Close";
import closeIconTheme from "./closeIconTheme";

import "./thumbnail.styles.scss";

const Thumbnail = ({ imgUrl, title, date }) => {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(setCurrentDate(date));
    //dispatch(fetchImage(date));

    // dispatch apod selectedDate
  };


  return (
    <div className="thumbnail" onClick={handleButton}>
      <div className="thumbnail__imgbox">
        {isImage(imgUrl) ? (
          <img src={imgUrl} alt="Nasa Thumbnail" className="thumbnail__img" />
        ) : (
          <img src={youtube2Thumbnail(imgUrl)} alt="Nasa Thumbnail" className="thumbnail__img" />
        )}
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
