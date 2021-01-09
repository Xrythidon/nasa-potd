import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";


// Components
import { TitleBar } from "./components/TitleBar/titleBar";
import { PictureBar } from "./components/PictureBar/pictureBar";
import { DescBar } from "./components/DescBar/descBar";
import Spinner from "./components/Spinner/spinner";


// Actions
import { fetchImage, nextDateDay,setCurrentDate } from "./redux/apod/apod.actions";

// Time and DatePicker
import { DatePicker } from "@material-ui/pickers";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";



function App({ apod, loading, dateTest, fetchAPOD, nextDay }) {
  const [selectedDate, setSelectedDate] = useState(null)





  useEffect(() => {
    console.log(dateTest,"potato");
   // nextDay()
    console.log(dateTest,"potato2");
    fetchAPOD(selectedDate)

  }, [selectedDate]);

  return loading ? (
    <Spinner/>
  ) : (
    <div>
      <button onClick={() => nextDay()}>Test</button>
      <TitleBar apod={apod} />
      <PictureBar apod={apod} />
      <DescBar apod={apod} />
      <DatePicker autoOk value={selectedDate} onChange={date => setSelectedDate(date)}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  apod: state.apod.apod,
  loading: state.apod.loading,
  dateTest: state.apod.selectedDate.format("YYYY-MM-DD")
});

const mapDispatchToProps = dispatch => ({
  fetchAPOD: (date) => dispatch(fetchImage(date)),
  setDate: (date) => dispatch(setCurrentDate(date)),
  nextDay: () => dispatch(nextDateDay())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);



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
