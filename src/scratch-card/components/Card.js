import React from "react";
import { useRef, useState } from "react";

import "./Card.css";

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const cardRef = useRef(null);
  const onClickHandler = () => {
    if (!clicked) {
      cardRef.current.className = "scratch";
      console.log(cardRef.current.className);
    } else {
      cardRef.current.className = "card-content";
      console.log(cardRef.current.className);
      props.generateTask();
    }
    setClicked(!clicked);
  };

  return (
    <div ref={cardRef} className="card-content" onClick={onClickHandler}>
      <h1 className={clicked ? "content-text" : ""}>{props.title}</h1>
    </div>
  );
};

export default Card;
