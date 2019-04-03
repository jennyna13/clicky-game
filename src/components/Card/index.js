import React from "react";
import "./style.css";

const Card = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt="imagebox" src={props.image} />
    </div>
  </div>
);



export default Card;
