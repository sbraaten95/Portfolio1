import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import resume from "../assets/files/front_end_resume4.pdf";
import Container from "react-bootstrap/Container";

function ResumeDisplayer(props) {
  return (
    <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container className="pl-5">
          <iframe
            className="sb-resume"
            title="resume"
            width="1000px"
            height="600px"
            src={resume}
          ></iframe>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default ResumeDisplayer;
