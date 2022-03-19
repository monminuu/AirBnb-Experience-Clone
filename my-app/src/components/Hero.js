import React from "react";
import picture from "../images/photo-grid.png";

export default function Hero() {
    return(
        <section>
                <img src={picture} className="hero--pic"/>
            <div>
                <h1 className="hero-heading">Online Experiences</h1>
                <p className="hero-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>

        </section>
    );
}