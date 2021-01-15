import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


// Components
import { TitleBar } from "../../components/TitleBar/titleBar";
import { PictureBar } from "../../components/PictureBar/pictureBar";
import { DescBar } from "../../components/DescBar/descBar";
import SetFavourite from "../../components/Favourite/setFavourite";
import Favourites from "../../components/Favourites/favourites";
import Spinner from "../../components/Spinner/spinner";


// Actions
import { fetchImage } from "../../redux/apod/apod.actions";

const HomePage = () => {

  const selectedDate = useSelector((state) => state.apod.selectedDate); // redux name in rootReducer
  const loading = useSelector((state) => state.apod.loading); // redux name in rootReducer

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchImage(selectedDate))

  }, [selectedDate, dispatch]);



  return loading ? (
    <Spinner/>
  ) : (
    <div>

      <TitleBar  />
      <PictureBar />
      <DescBar  />
      <SetFavourite/>
      <Favourites />
      </div>
  );
}


export default HomePage;



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
