import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer // mt is margin top
      className="mt-5"
    >
      <Container fluid={true}>
        <Row // justify-content-between aligns the flex elements within the element at either the start, middle, or end
          className="border-top justify-content-between p-3"
        >
          <Col // md is the number of columns to span on medium devices
            className="p-0"
            md={3}
            sm={12}
          >
            Scott Braaten
          </Col>
          <Col // d-flex pronounces the element as a flex element
            // justify-content-end makes sure it is aligned at the right side of the page
            // justify-content-end particularly helps with responsiveness
            className="p-0 d-flex justify-content-end"
            md={3}
          >
            This site was made by Scott Braaten.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
