import React, { useState, useEffect} from 'react';
import './App.css';

import Client from "./Client"

import {TitleBar} from "./components/TitleBar/titleBar"
import {PictureBar} from "./components/PictureBar/pictureBar"
import {DescBar} from "./components/DescBar/descBar"

function App() {
  const [apod, setApod] = useState({})

  useEffect(() => {
    Client.getApod().then(apodData => { setApod(apodData.data) })
  }, [])

  console.log(apod.title)


  return (
    <div >
    <TitleBar apod={apod}/>
    <PictureBar apod={apod}/>
    <DescBar apod={apod}/>
          {

           
          }
    </div>
  );
}

export default App;
