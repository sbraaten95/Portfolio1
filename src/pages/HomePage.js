import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function HomePage(props) {
  return (
    <div>
      <Hero
        className="justify-content-center p-10"
        title={props.title}
        subtitle={props.subtitle}
      />
      <Carousel className="" />
    </div>
  );
}

export default HomePage;
