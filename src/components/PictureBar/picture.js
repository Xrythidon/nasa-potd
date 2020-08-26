import React from "react";
import Image from "react-bootstrap/Image";
import Col from 'react-bootstrap/Col'

export const Picture = ({apod}) => {
  return (
    <div>
      <Col sm={4} className="m-auto">
        <img
          className="d-block mx-auto img-fluid w-100"
          src={apod.url}
          alt="NASA Space Image"
        ></img>
      </Col>
    </div>
  );
};
