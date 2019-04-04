import React from "react";
import "./style.css";

const Nav = props => (
    <div className="navbar">
        <div className="navtitle">
            <h1>Clicky Game</h1>
        </div>
        <div className="scores">
            <h3>Score: {props.score}</h3>
            <h3>Highest Score: {props.highscore}</h3>
        </div>
        </div>
  );




export default Nav;