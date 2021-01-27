import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./home.styles.scss";

// Components
import { TitleBar } from "../../components/TitleBar/titleBar";
import { PictureBar } from "../../components/PictureBar/pictureBar";
import { DescBar } from "../../components/DescBar/descBar";
import SetFavourite from "../../components/Favourite/setFavourite";
import Favourites from "../../components/Favourites/favourites";
import Spinner from "../../components/Spinner/spinner";

// Custom Hooks
import useProgressiveImage from "./useProgressiveImage";

// Utils
import formatDate from "../../components/Utilities/formatDate";

// Actions
import { fetchImage, setCurrentDate } from "../../redux/apod/apod.actions";
import { setFavourites } from "../../redux/favourites/favourite.actions";

import moment from "moment";

// Routing
import { useParams, useHistory } from "react-router-dom";

const HomePage = () => {
  const apod = useSelector((state) => state.apod.apod);
  const selectedDate = useSelector((state) => state.apod.selectedDate); // redux name in rootReducer
  const loading = useSelector((state) => state.apod.loading); // redux name in rootReducer

  const [firstPaint, setFirstPaint] = useState(false);

  const dispatch = useDispatch();

  let history = useHistory();
  const { id } = useParams();

  let regexDate = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

  useEffect(() => {
    if (id) {
      if (id.match(regexDate)) {
        dispatch(fetchImage(id));
      //  console.log("fetchhere?", id)
       // console.log("selectedDate", selectedDate)
      } else {
        
        console.log("404");
      }
    } else {
     dispatch(fetchImage(moment()));
    }

    dispatch(setFavourites());
  }, [ id]);

  useEffect(() => {
    dispatch(setCurrentDate(id));
    console.log("??")
    setFirstPaint(true);
  }, []);

  const loadedImage = useProgressiveImage(apod.url, "black");

  document.body.style.backgroundImage = `url(${loadedImage})`;
  document.body.style.transition = firstPaint && "background 2s ease-in-out";

  return loading ? (
    <div className="homepage">
      <Spinner />
    </div>
  ) : (
    <div className="">
      <TitleBar />
      <PictureBar />
      <div className="lowerContainer">
        <DescBar />
        <SetFavourite />
        <Favourites />
      </div>
    </div>
  );
};

export default HomePage;
