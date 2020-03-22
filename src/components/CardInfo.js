import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="sb-card-info" style={style}>
      <p className="sb-card-title sb-light-grey">{props.title}</p>
      <p className="sb-card-subtitle sb-white">{props.subtitle}</p>
      <a
        className="sb-white"
        href={props.codeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        View
      </a>
    </animated.div>
  );
}

export default CardInfo;
