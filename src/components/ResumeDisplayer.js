import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import resume from "../assets/files/Resume.pdf";
import Container from "react-bootstrap/Container";

function ResumeDisplayer(props) {
  return (
    <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container>
          <iframe
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
