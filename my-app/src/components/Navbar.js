import React from "react";
import logo from './airbnb-logo.png';

export default function Navbar() {
    return (
        <div>
            <nav>
                <img src={logo} className="app-logo"/>
            </nav>
        </div>
    )
}