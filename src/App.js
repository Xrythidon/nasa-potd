import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";

import { TitleBar } from "./components/TitleBar/titleBar";
import { PictureBar } from "./components/PictureBar/pictureBar";
import { DescBar } from "./components/DescBar/descBar";

import Spinner from "./components/Spinner/spinner";

import { fetchImage } from "./redux/apod/apod.actions";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function App({ apod, loading, fetchAPOD }) {
  const [selectedDate, setSelectedDate] = useState(null)

  useEffect(() => {
    fetchAPOD(selectedDate)
  }, [selectedDate]);

  // [] => is the state container, and it will ony refresh if airbnb is picked


  

  return loading ? (
    <Spinner/>
  ) : (
    <div>
      <TitleBar apod={apod} />
      <PictureBar apod={apod} />
      <DescBar apod={apod} />
      <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  apod: state.apod.apod,
  loading: state.apod.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchAPOD: (date) => dispatch(fetchImage(date))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
