import React from "react";
import picture from "./katie-zaferes.png";
import star from "./star.png";

export default function Card () {
    return (
        <card>
            <img src={picture} className="card--pic"/>
            <img src={star} className="card--star"/>
            <p className="card--para">Life lessons with</p>
        </card>
    );
}