import React from "react";
import star from "../images/star.png";

export default function Card (props) {
    console.log(props);
    return (
        <div className="card">
            <img src={`./images/${props.img}`} className="card--pic"/>
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