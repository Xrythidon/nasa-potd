import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment"

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
import isDate from "../../components/Utilities/isDate";
import checkDateConstraints from "../../components/Utilities/checkDateConstraints";

// Actions
import { fetchImage } from "../../redux/apod/apod.actions";
import { setFavourites } from "../../redux/favourites/favourite.actions";


// Routing
import { useParams, useHistory } from "react-router-dom";

const HomePage = () => {
  const apod = useSelector((state) => state.apod.apod);
  const loading = useSelector((state) => state.apod.loading); // redux name in rootReducer

  const [firstPaint, setFirstPaint] = useState(false);

  const dispatch = useDispatch();

  let history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      if (isDate(id) && checkDateConstraints(id)) {
        dispatch(fetchImage(id));
      } else {
        history.replace(`/404`);
        console.log("404");
      }
    } else {
      dispatch(fetchImage(moment()));
    }

    dispatch(setFavourites());
  }, [id, dispatch, history]);

  useEffect(() => {
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
