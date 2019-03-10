import React from "react";
import "./style.css";

function ImageCard(props) {
    return ( 
        <div className="card mx-2" onClick={() => props.handleClick(props.id)} id={props.id}>
            <img src = {props.image} alt = {props.id} ></img>
        </div>
    );
};

export default ImageCard;