import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./pictureBar.styles.scss";

// Actions
import {
  fetchImage,
  nextDateDay,
  prevDateDay,
  setCurrentDate,
} from "../../redux/apod/apod.actions";

import isImage from "../Utilities/isImage";

import { Picture } from "./picture";
import Video from "./video";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import DatePicker from "../DatePicker/datePicker.component.js";
import { Visibility } from "@material-ui/icons";

export const PictureBar = () => {
  const apod = useSelector((state) => state.apod.apod);
  const loaded = useSelector((state) => state.apod.loaded);
  const selectedDate = useSelector((state) => state.apod.selectedDate);
  const isToday = useSelector((state) => state.apod.isToday);
  const isNextDayToday = useSelector((state) => state.apod.isNextDayToday);
  const isFirstApodDay = useSelector((state) => state.apod.isFirstApodDay);



  const dispatch = useDispatch();

  const setSelectedDate = (date) => {
    dispatch(setCurrentDate(date));
  };

  const next = () => {
    dispatch(nextDateDay());
    dispatch(fetchImage(selectedDate));
  };

  const prev = () => {
    dispatch(prevDateDay());
    dispatch(fetchImage(selectedDate));
  };

  return (
    <div className="picture">
      <div className="picture__bar">
        <div className="picture__holder">
          {loaded &&
            (isImage(apod.url) ? (
              <Picture apod={apod} className="picture__img" />
            ) : (
              <Video url={apod.url} className="picture__img" />
            ))}
        </div>
        <div className="picture__date">
          <div className="picture__btn-holder" style={isFirstApodDay ? {visibility: "hidden"} : null}>
            <button onClick={() => prev()} className="btn picture__btn">
              <div className="icon">
                <ArrowBackIcon />
              </div>
            </button>
            <p className="picture__btn-text">{isToday ? "Yesterday" : "Prev Day"}</p>
          </div>

          <DatePicker maxDate={selectedDate} date={selectedDate} setDate={setSelectedDate} />
          <div className="picture__btn-holder" style={isToday ? {visibility: "hidden"} : null}>
            <button onClick={() => next()} className="btn picture__btn">
              <div className="icon">
                <ArrowForwardIcon />
              </div>
            </button>
            <p className="picture__btn-text">{isNextDayToday ? "Today" : "Next Day"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
