import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <Jumbotron //jumbotron fluid makes it so that corners are not rounded off
      className="bg-transparent justify-content-center jumbotron-fluid p-0"
    >
      <Container fluid={true}>
        <Row // py is vertical padding
          className="justify-content-center py-5"
        >
          <Col md={8} sm={12} xs={12} className="">
            {props.title && (
              <h1 // display is font size
                className="display-1 font-weight-bolder sb-light-grey"
              >
                {props.title}
              </h1>
            )}
            {props.subtitle && (
              <h1 // display is font size
                className="display-10 font-weight-lighter sb-white"
              >
                {props.subtitle}
              </h1>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
