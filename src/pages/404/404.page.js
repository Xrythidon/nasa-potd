import React from "react";

// Routing
import { useHistory } from "react-router-dom";

import "./404.styles.scss";
import bgImage from "../../images/stars.jpg"

const MissingPage = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/`);
  };

  
  document.body.style.backgroundImage = `url(${bgImage})`;
  return (
    <div className="container">
      <div className="mp__container">
        <h1 className="mp__title">404</h1>
        <h2 className="mp_subtitle">UH OH! You're lost.</h2>
        <p className="mp__text">
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <button onClick={handleClick} className="btn mp__btn">HOME</button>
      </div>
    </div>
  );
};

export default MissingPage;
