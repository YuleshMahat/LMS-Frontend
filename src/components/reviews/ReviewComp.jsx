import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StarComp from "./StarComp";

const ReviewComp = ({ username, message, rating }) => {
  return (
    <Container>
      <Row className="bookReviewComp">
        <Col xs={2}>Profile Image</Col>
        <Col xs={10} className="d-flex flex-column ">
          <h4>By:- {username}</h4>
          <p>
            {rating}
            <StarComp rating={rating} />
          </p>
          <p>{message}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewComp;
