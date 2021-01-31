import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {setFavourite} from "../../redux/favourites/favourite.actions"
import {setToast} from "../../redux/toasts/toasts.actions";

import "./fav.styles.scss";

const SetFavourite = () => {
  const apod = useSelector((state) => state.apod.apod);
  const [fav, setFav] = useState({ title: "", imageUrl: "", date: "" });
  const dispatch = useDispatch();

  const { title, date, url } = apod;

  useEffect(() => {
    setFav({ title, imageUrl: url, date });
  }, [title, date, url]);

  const maxCharSize = (word) => {
    // 15 chars
    const maxCharSize = 40;

    if (word.length <= maxCharSize) {
      return word;
    }

    let newWord = word.slice(0, maxCharSize);
    newWord.trim();

    return newWord + "...";
  };

  const handleClick = () => {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", "[]");
    }
    const oldData = JSON.parse(localStorage.getItem("items"));
    const { title, imageUrl, date } = fav;
    const newData = { title: maxCharSize(title), imageUrl, date };

    if (oldData[0]) {
      if (oldData.some((item) => item["title"] === newData.title)) {
        console.log(`Duplicate entry found of ${newData.title}`);
        //This is where you dispatch duplicate entry notification
        dispatch(setToast("warning",`Duplicate entry found of "${newData.title}"`))
        return;
      }
    }

    oldData.push(newData);
    // This is where you can dispatch succesful favourite notification
    dispatch(setToast("success", `Added to favourites "${newData.title}"`))
    
    dispatch(setFavourite(oldData));
    localStorage.setItem("items", JSON.stringify(oldData));

    console.log(oldData);
  };

  return (
    <div className="fav">
      <button onClick={handleClick} className="btn fav__btn">
        Set Favourite
      </button>
    </div>
  );
};

export default SetFavourite;

/* 

Have to check here for a url for yt


*/
