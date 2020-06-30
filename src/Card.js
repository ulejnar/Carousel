import React from "react";
import "./Card.css";
import image1 from "./image1.jpg";

function Card(props) {
  return (
    <div className="Card">
      <h4 className="Card-title">{props.caption}</h4>
      <img className="Card-image" src={props.src} alt={props.caption} />
      <small className="Card-small">
        Image {props.currNum} of {props.totalNum}.
      </small>
    </div>
  );
}
Card.defaultProps = {
  src: image1,
  caption: "Photo by Richard Pasquarella on Unsplash",
  currNum: 10,
  totalNum: 12
}

export default Card;
