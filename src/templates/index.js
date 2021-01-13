import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import Snackbar from '@material-ui/core/Snackbar';

import datePickerTheme from "./datePickerTheme";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import StarfieldAnimation from "react-starfield-animation";

import "./styles.scss";

import picture from "./PIA19642Titan1024.jpg";

const Index = () => {
  const [date, setDate] = useState(new Date());

  const [toast, setToast] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = toast;

  const handleClick = (newState) => () => {
    setToast({ open: true, ...newState });
  };

  const handleClose = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <>
    <button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Top-Center</button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
        numParticles={300}
        alphaFactor={0.4}
      />
      <div className="title">
        <div className="title__bar">
          <h1 className="title__text">Saturn's Moon</h1>
        </div>
      </div>
      <div className="picture">
        <div className="picture__bar">
          <div className="picture__holder">
            <img src={picture} alt="" className="picture__img" />
          </div>
          <div className="picture__date">
            <div className="picture__btn-holder">
              <button className="btn picture__btn">
                <div className="icon">
                  <ArrowBackIcon />
                </div>
              </button>
              <p className="picture__btn-text">Prev Day</p>
            </div>
            <ThemeProvider theme={datePickerTheme}>
              <DatePicker
                className="datepicker"
                format="D/M/YYYY"
                autoOk
                value={date}
                onChange={(date) => setDate(date)}
              />
            </ThemeProvider>
            <div className="picture__btn-holder">
              <button className="btn picture__btn">
                <div className="icon">
                  <ArrowForwardIcon />
                </div>
              </button>
              <p className="picture__btn-text">Next Day</p>
            </div>
          </div>
        </div>
      </div>

      <div className="desc">
        <div className="desc__bar">
          <p className="desc__text">
            Like Earth's moon, Saturn's largest moon Titan is locked in
            synchronous rotation. This mosaic of images recorded by the Cassini
            spacecraft in May of 2012 shows its anti-Saturn side, the side
            always facing away from the ringed gas giant. The only moon in the
            solar system with a dense atmosphere, Titan is the only solar system
            world besides Earth known to have standing bodies of liquid on its
            surface and an earthlike cycle of liquid rain and evaporation. Its
            high altitude layer of atmospheric haze is evident in the Cassini
            view of the 5,000 kilometer diameter moon over Saturn's rings and
            cloud tops. Near center is the dark dune-filled region known as
            Shangri-La. The Cassini-delivered Huygens probe rests below and left
            of center, after the most distant landing for a spacecraft from
            Earth.
          </p>
        </div>
      </div>

      <div className="fav">
        <button className="btn fav__btn">Set Favourite</button>
      </div>

      <div className="favs">
        <h2 className="favs__title"></h2>
        <div className="favs__container">
          <div className="thumbnail">
           <HighlightOffRoundedIcon  style={{color: "#22a589", position: "absolute", right: "-5px", top: "-5px", fontSize: "2rem"}}/>
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
          <div className="thumbnail">
            <img src={picture} alt="" className="thumbnail__img" />
            <h3 className="thumbnail__title">
              A Historic Brazilian Constellation
            </h3>
            <p className="thumbnail__date">12-12-2020</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

/* 
title, date, img
https://material-ui-pickers.dev/api/DatePicker
*/
