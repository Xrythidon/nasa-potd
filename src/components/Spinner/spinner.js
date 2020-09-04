import React from "react";
import Spinner from "react-bootstrap/Spinner";


const SpinnerContainer = () => {
  
const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <div>
      <Spinner animation="border" role="status" style={style}>
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerContainer
