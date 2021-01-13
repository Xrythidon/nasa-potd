import React from 'react'
import { useSelector } from "react-redux";
import "./titleBar.styles.scss";



export const TitleBar = () => {
    const apod = useSelector((state) => state.apod.apod);

    return (

        <div className="title">
        <div className="title__bar">
          <h1 className="title__text">{apod.title}</h1>
        </div>
      </div>


    )
}
