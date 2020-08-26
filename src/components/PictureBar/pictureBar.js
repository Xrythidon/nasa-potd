import React from "react";

import { Picture } from "./picture";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const PictureBar = ({ apod }) => {
  return (
    <div >
    <Container fluid>
      <Row>
        <Col>ARROW HERE</Col>
        <Col xs={10}><Picture apod={apod} /></Col>
        <Col>ARROW HERE</Col>
      </Row>
      </Container>
    </div>
  );
};
