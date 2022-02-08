import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <h1 className="title">
          <span id="purl-title">🧶Purl</span>
          <span id="bot-title">Bot</span>
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/how-to" className="nav-link">
              How To Use
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Pattern Generator
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About PurlBot
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
