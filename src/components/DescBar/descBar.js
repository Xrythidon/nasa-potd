import React from "react";
import { useSelector } from "react-redux";


import "./descBar.styles.scss"

export const DescBar = () => {
  const apod = useSelector((state) => state.apod.apod);

  return (
    <div className="desc">
      <div className="desc__bar">
        <p className="desc__text">
          {apod.explanation}
        </p>
      </div>
    </div>
  );
};
