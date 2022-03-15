import React from "react";
import picture from "./katie-zaferes.png";
import star from "./star.png";

export default function Card (props) {
    console.log(props);
    return (
        <div className="card">
            <img src={`./${props.img}`}/>
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span> {props.rating} </span>
                <span className="grey"> (6) . </span>
                <span className="grey">USA</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    );
}