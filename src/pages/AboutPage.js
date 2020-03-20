import React from "react";

import Hero from "../components/Hero.js";
import Content from "../components/Content.js";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>{/** Personal content */}</Content>
    </div>
  );
}

export default AboutPage;
