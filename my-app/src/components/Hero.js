import React from "react";
import picture from "./photo-grid.png";

export default function Hero() {
    return(
        <div>
            <div className="hero-pic">
                <img src={picture} />
            </div>
            <div className="hero-heading">
                <h1>Online Experiences</h1>
                <p></p>
            </div>
        </div>
    );
}