import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";

import { TitleBar } from "./components/TitleBar/titleBar";
import { PictureBar } from "./components/PictureBar/pictureBar";
import { DescBar } from "./components/DescBar/descBar";

import Spinner from "./components/Spinner/spinner";

import { fetchImage } from "./redux/apod/apod.actions";

function App({ image, loading, fetchImage }) {
  useEffect(() => {
    fetchImage()
  }, []);



  return loading ? (
    <Spinner/>
  ) : (
    <div>
      <TitleBar apod={image} />
      <PictureBar apod={image} />
      <DescBar apod={image} />
      {
        console.log(image.title, "POTATO"),
        console.log(loading, "loading text")
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  image: state.apod.apod,
  loading: state.apod.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchImage: () => dispatch(fetchImage())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
