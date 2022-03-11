import React from "react";
import picture from "./photo-grid.png";

export default function Hero() {
    return(
        <div>
            <div className="hero-pic">
                <img src={picture} />
            </div>
            <div>
                <h1 className="hero-heading">Online Experiences</h1>
                <p className="hero-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    );
}