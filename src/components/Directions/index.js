import React from "react";
import "./style.css";

function Directions(props) {
    return(
        <div className="directions text-center">
            <h1>Adventure Time Clicky Game!</h1>
            <p className="directions">Click an image to earn points, but if you click the same image twice, you lose!</p>
        </div>
    );
};

export default Directions;