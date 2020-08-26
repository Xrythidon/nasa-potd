import React, { useState, useEffect} from 'react';
import './App.css';

import Client from "./Client"

function App() {
  Client.getApod().then( apodData => console.log(apodData.data))


  return (
    <div >
      <header >
          {
            // TITLE BAR
            // PICTURE BAR (Inside picturebar, have pic, and directional keys)
            // Desc Bar (setFavButton, DatePicker, Desc)

           
          }
      </header>
    </div>
  );
}

export default App;
