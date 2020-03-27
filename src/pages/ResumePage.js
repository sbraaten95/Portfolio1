import React from "react";

import Hero from "../components/Hero";
import ResumeDisplayer from "../components/ResumeDisplayer";

function ResumePage(props) {
  return (
    <div>
      <Hero title={props.title}></Hero>
      <ResumeDisplayer />
    </div>
  );
}

export default ResumePage;
