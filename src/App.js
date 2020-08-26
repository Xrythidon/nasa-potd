import React, { useState, useEffect} from 'react';
import './App.css';

import Client from "./Client"

import {TitleBar} from "./components/TitleBar/titleBar"

function App() {
  const [apod, setApod] = useState({})

  useEffect(() => {
    Client.getApod().then(apodData => { setApod(apodData.data) })
  }, [])

  console.log(apod.title)


  return (
    <div >
    <TitleBar apod={apod}/>
          {
            // TITLE BAR
            // PICTURE BAR (Inside picturebar, have pic, and directional keys)
            // Desc Bar (setFavButton, DatePicker, Desc)

           
          }
    </div>
  );
}

export default App;
