import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { fetchImage } from "../../redux/apod/apod.actions";

import Thumbnail from "./thumbnail";

import "./favs.styles.scss";

// get favourites array from localstorage

const Favourites = () => {
  const dispatch = useDispatch();

  const favArray = JSON.parse(localStorage.getItem("items"));

  const handleButton = () => {
    // dispatch(fetchImage(date))
    console.log("hit?");
  };

  return (
    <div className="favs">
      <h2 className="favs__title"></h2>
      <div className="favs__btnContainer">
        <button className="btn favs__btn">Delete </button>
        <button className="btn favs__btn favs__btn--all">Delete All</button>
      </div>

      <div  className={favArray && "favs__container"}>
        {favArray ? (
          favArray.map((item) => {
            return (
              <Thumbnail
                key={item["imageUrl"]}
                imgUrl={item["imageUrl"]}
                title={item["title"]}
                date={item["date"]}
              />
            );
          })
        ) : (
          <div className="favs__container--empty">
            <h1>
              Your favourite images will be here! You don't have any currently.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
