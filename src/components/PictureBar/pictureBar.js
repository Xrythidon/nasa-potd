import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./pictureBar.styles.scss";

// Actions
import {
  fetchImage,
  nextDateDay,
  prevDateDay,
  setCurrentDate,
} from "../../redux/apod/apod.actions";

import { Picture } from "./picture";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import DatePicker from "../DatePicker/datePicker.component.js";

export const PictureBar = () => {
  const apod = useSelector((state) => state.apod.apod);
  const selectedDate = useSelector((state) => state.apod.selectedDate);

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
          <Picture apod={apod} className="picture__img" />
        </div>
        <div className="picture__date">
          <div className="picture__btn-holder">
            <button onClick={() => prev()} className="btn picture__btn">
              <div className="icon">
                <ArrowBackIcon />
              </div>
            </button>
            <p className="picture__btn-text">Prev Day</p>
          </div>

          <DatePicker date={selectedDate} setDate={setSelectedDate} />
          <div className="picture__btn-holder">
            <button onClick={() => next()} className="btn picture__btn">
              <div className="icon">
                <ArrowForwardIcon />
              </div>
            </button>
            <p className="picture__btn-text">Next Day</p>
          </div>
        </div>
      </div>
    </div>
  );
};
