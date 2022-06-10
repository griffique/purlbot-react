import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div class="nav-container">
      <nav className="no-print navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <h1 className="nav-title">
            <span id="purl-title">Purl</span>
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
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a href="http://127.0.0.1:5000/account" className="nav-link">
                My Account
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item register">
                <a href="http://127.0.0.1:5000/register" className="nav-link">
                  <button className="btn btn-success">Register</button>
                </a>
              </li>
              <li className="nav-item login">
                <a href="http://127.0.0.1:5000/login" className="nav-link">
                <button className="btn btn-primary">Log In</button>
                </a>
              </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
