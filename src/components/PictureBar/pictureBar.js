import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { fetchImage, nextDateDay, prevDateDay } from "../../redux/apod/apod.actions";

import { Picture } from "./picture";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const PictureBar = () => {
  const apod = useSelector((state) => state.apod.apod);
  const selectedDate = useSelector((state) => state.apod.selectedDate);

  const dispatch = useDispatch();

  const next = () => {
    dispatch(nextDateDay())
    dispatch(fetchImage(selectedDate))
  }
  const prev = () => {
    dispatch(prevDateDay())
    dispatch(fetchImage(selectedDate))
  }

  return (
    <div >
    <Container fluid>
      <Row>
      <button onClick={() => prev()}>Prev</button>
        <Col xs={10}><Picture apod={apod} /></Col>
        <button onClick={() => next()}>Next</button>
      </Row>
      </Container>
    </div>
  );
};
