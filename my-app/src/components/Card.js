import React from "react";
import picture from "./katie-zaferes.png";
import star from "./star.png";

export default function Card () {
    return (
        <div className="card">
            <img src={picture} className="card--pic"/>
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span> 5.0 </span>
                <span className="grey"> (6) . </span>
                <span className="grey">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    );
}