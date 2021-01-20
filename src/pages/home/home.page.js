import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import bgImage from "../../images/stars.jpg"
// Components
import { TitleBar } from "../../components/TitleBar/titleBar";
import { PictureBar } from "../../components/PictureBar/pictureBar";
import { DescBar } from "../../components/DescBar/descBar";
import SetFavourite from "../../components/Favourite/setFavourite";
import Favourites from "../../components/Favourites/favourites";
import Spinner from "../../components/Spinner/spinner";
import isImage from "../../components/Utilities/isImage";

// Custom Hooks
import useProgressiveImage from "./useProgressiveImage";

// Actions
import { fetchImage } from "../../redux/apod/apod.actions";
import { setFavourites } from "../../redux/favourites/favourite.actions";

const HomePage = () => {
  const apod = useSelector((state) => state.apod.apod);
  const selectedDate = useSelector((state) => state.apod.selectedDate); // redux name in rootReducer
  const loading = useSelector((state) => state.apod.loading); // redux name in rootReducer
  const loaded = useSelector((state) => state.apod.loaded); // redux name in rootReducer

  const [firstPaint, setFirstPaint] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImage(selectedDate));
    dispatch(setFavourites());
  }, [selectedDate, dispatch]);

  useEffect(() => {
    setFirstPaint(true)
  }, [])

  
  const loadedImage = useProgressiveImage(apod.url,"black");

  document.body.style.backgroundImage =  (`url(${loadedImage})` || `black`);  
  document.body.style.transition = firstPaint && "background 2s ease-in-out";


  return loading ? (
    <div className="homepage">
    <Spinner />
    </div>
  ) : (

    <div  className="">

      <TitleBar />
      <PictureBar />
      <DescBar />
      <SetFavourite />
      <Favourites />
    </div>
  );
};

export default HomePage;

/*
    <div >
      <TitleBar />
      <PictureBar />
      <DescBar />
      <SetFavourite />
      <Favourites />
    </div>

    (isImage(apod.url) ? `url(${apod.url})` : `url(${bgImage})`

*/
