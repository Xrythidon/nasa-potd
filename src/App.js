import React from "react";

import HomePage from "./pages/home/home.page"

// Components

function App() {
  return <div>
  <HomePage/>
  </div>;
}

export default App;

/*
DatePicker: Fix range out of bounds (undefined) and current day image of the day
Fix Style formating, etc etc,
Fix arrows(handle date, -1 day, +1 day, etc) -> handle in redux actions
Handle video format AND images same time

Fix: 
Favourite Button
 -> Handle storage
 -> Save day and draw from the api directly rather than save images locally (saves space)
*/

/*
DatePicker ->
Work on redux

Handle date through redux actions (global state)

Got an event listener that changes date when button is pressed



*/
