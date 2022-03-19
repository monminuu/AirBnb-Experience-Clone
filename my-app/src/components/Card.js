import React from "react";
import picture from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card (props) {
    console.log(props);
    return (
        <div className="card">
            <img src={`./images/${props.picture}`}/>
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span> {props.rating} </span>
                <span className="grey"> ({props.reviewCount}) . </span>
                <span className="grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    );
}