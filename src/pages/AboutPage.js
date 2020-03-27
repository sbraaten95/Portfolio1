import React from "react";

import Hero from "../components/Hero.js";
import Content from "../components/Content.js";

function AboutPage(props) {
  return (
    <div id="about-page">
      <Hero title={props.title} />

      <Content>
        <h1 class="sc-custom-text-1 sb-white">
          One of my favorite questions to ask.
        </h1>
        <h5 class="sc-custom-text-1 sb-white">
          My name is Scott Braaten, and I am a nomad. I have lived in Moscow,
          Barcelona, London, Luxembourg, Washington DC, San Diego, and West Palm
          Beach. Although there are countless ways this may have changed my
          life, a couple of things in particular stand out to me. During my
          travels I developed an interest in epistemology, or the theory of
          knowledge, having witnessed many different approaches to life as well
          as their accompanying perspectives. Additionally, I managed to learn
          French fluently, as well as a bit of Spanish and German.
        </h5>
        <h5 class="sc-custom-text-1 sb-white">
          Upon graduating high school I was determined to revamp the field of
          psychology by integrating it with neuroscience. This is still a vision
          of mine, although I am now far more interested in entering the
          biological and computational fields of cognitive science. This began
          when I was introduced to computer science at UC San Diego.
        </h5>
        <h5 class="sc-custom-text-1 sb-white">
          I love analyzing situations and solving problems, and that is exactly
          what programming allows me to do. I began by learning Java and Python;
          alongside that, I surveyed Android and Hadoop. I moved onto full stack
          website development, which I began at Coding Dojo, a programming boot
          camp. This is where I discovered my favorite language, JavaScript.
        </h5>
        <h5 class="sc-custom-text-1 sb-white sb-mar-bot">
          Over the next year while I finish my Bachelor's, I aim to develop my
          skills in React, Angular, Node, Python, and CSS. I wish to do that by
          working with a team of programmers to create and maintain something
          great.
        </h5>
      </Content>
    </div>
  );
}

export default AboutPage;
