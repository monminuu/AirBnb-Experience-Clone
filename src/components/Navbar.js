import React from "react";
import logo from '../images/airbnb-logo.png';

export default function Navbar() {
    return (
        <div>
            <nav>
                <img src={logo} className="nav-logo"/>
            </nav>
        </div>
    )
}