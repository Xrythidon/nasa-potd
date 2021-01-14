import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./fav.styles.scss";

const SetFavourite = () => {
  const apod = useSelector((state) => state.apod.apod);
  const [fav, setFav] = useState({ title: "5122", imageUrl: "", date: "" });

  const { title, date, url } = apod;

  useEffect(() => {
    setFav({ title, imageUrl: url, date });
  }, []);

  const handleClick = () => {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", "[]");
    }
    const oldData = JSON.parse(localStorage.getItem("items"));
    const newData = fav;

    if (oldData[0]) {
      if (oldData.some((item) => item["title"] === newData.title)) {
        console.log(`Duplicate entry found of ${newData.title}`);
        //This is where you dispatch duplicate entry notification
        return;
      }
    }

    oldData.push(newData);
    // This is where you can dispatch succesful favourite notification
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
