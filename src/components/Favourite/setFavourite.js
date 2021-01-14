import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./fav.styles.scss";

const SetFavourite = () => {
  const apod = useSelector((state) => state.apod.apod);
  const [fav, setFav] = useState({ title: "5122", imageUrl: "", desc: "" });

  const {title, explanation, url} = apod;

  useEffect(() => {
    setFav({title, imageUrl: url, desc: explanation})


  }, []);

  const handleClick = () => {
    const newData = fav;

    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", "[]");
    }

    const oldData = JSON.parse(localStorage.getItem("items"));
    oldData.push(newData);

    localStorage.setItem("items", JSON.stringify(oldData));

    console.log("Stored in localStorage");
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