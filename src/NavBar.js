import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    const navStyle = ({
        float: "right",
        border: "none",
        background: "none",
        color: "#7209b7",
        padding: "20px 10px",
        fontSize: "25px",
        fontWeight: "bold",
        textDecoration: "none",
        margin: "0 25px",
        outline: "none",
    });
    return (
        <nav>
            <div className="navigation-bar">
                <h1 className="title">
                    🧶<span id="purl-title">Purl</span>
                    <span id="bot-title">Bot</span>
                </h1>
                <div className="links">
                    <Link to='/how-to'>
                        <button className="how-to-link" style={navStyle}>How To Use</button>
                    </Link>
                    <Link to='/'>
                        <button className="pattern-generator-link" style={navStyle}>Pattern Generator </button>
                    </Link>
                    <Link to='/about'>
                        <button className="about-link" style={navStyle}>About PurlBot</button>
                    </Link>
                </div>
            </div>
        </nav >)
}
export default NavBar;