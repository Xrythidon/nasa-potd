import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DeleteFavourite from "./deleteFavourite";
import DeleteAllFavourites from "./deleteAllFavourites";

import Thumbnail from "./thumbnail";

import "./favs.styles.scss";

// get favourites array from localstorage

const Favourites = () => {
  const favourites = useSelector((state) => state.fav.favourites)

  useEffect(() => {
    if(favourites != null) {
      localStorage.setItem("items", JSON.stringify(favourites));
    }
  },[favourites])

  return (
    <div className="favs">
      <h2 className="favs__title"></h2>
      <div className="favs__btnContainer">
        <DeleteFavourite />
        <DeleteAllFavourites/>
      </div>

      <div  className={favourites && "favs__container"}>
        {favourites ? (
          favourites.map((item) => {
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
            <h3>
              Your favourite images will be here! You don't have any currently.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
