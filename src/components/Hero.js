import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import downloadImg from "../assets/images/download.png";

import resume from "../assets/files/front_end_resume4.pdf";

import { Link } from "react-router-dom";

function Hero(props) {
  const fontSizeAlter = title => {
    if (title === "Who am I?")
      return "display-3 font-weight-bolder sb-light-grey sc-custom-text-1 sb-neg-mar-bot";
    if (title === "Resume")
      return "display-9 font-weight-bolder sb-light-grey sc-custom-text-1";
    else return "display-3 font-weight-bolder sb-light-grey sc-custom-text-1";
  };

  return (
    <Jumbotron //jumbotron fluid makes it so that corners are not rounded off
      className="bg-transparent jumbotron-fluid p-0"
    >
      <Container fluid={true}>
        <Row // py is vertical padding
          className="justify-content-center py-3"
        >
          <Col md={8} sm={12} xs={12} className="">
            {props.title && (
              <h1 // display is font size
                className={fontSizeAlter(props.title)}
              >
                {`${props.title}\t`}
                {props.title === "Download Resume" ? (
                  <Link to={resume} target="_blank" download>
                    <Image
                      width="100px"
                      height="100px"
                      src={downloadImg}
                    ></Image>
                  </Link>
                ) : (
                  ""
                )}
              </h1>
            )}
            {props.subtitle && (
              <h1 // display is font size
                className="display-10 font-weight-lighter sb-white sc-custom-text-1"
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
