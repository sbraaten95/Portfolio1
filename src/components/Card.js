import React from "react";

import CardInfo from "./CardInfo";

function Card(props) {
  return (
    <div
      className="d-inline-block sb-card"
      onClick={e => props.click(props.item)}
    >
      <img
        className="sb-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subtitle={props.item.subtitle}
          codeLink={props.item.codeLink}
        />
      )}
    </div>
  );
}

export default Card;
