import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className = "header">
            <div className = "title"><h3>Clicky Game</h3></div>
            <div className = "result text-center"><p>{props.result}</p></div>
            <div className = "scoreboard">
                <p>Score: {props.score} | Top Score: {props.topScore}</p>
            </div>
        </div>
    );
};

export default Header;