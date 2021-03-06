import React from "react";
import picture from "../images/photo-grid.png";

export default function Hero() {
    return(
        <section className="hero">
                <img src={picture} className="hero--photo"/>
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-
                </p>
                <p className="hero--text">a-kind hosts all without leaving home.</p>
        </section>
    );
}