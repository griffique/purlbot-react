import React from "react";
import "./App.css";
import PatternGeneratorForm from "./PatternGeneratorForm";
import Footer from "./Footer.js";
import HowTo from "./HowTo.js";
import About from "./About.js";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">
        🧶<span id="purl-title">Purl</span>
        <span id="bot-title">Bot</span>
      </h1>
      <h2 className="subtitle">
        Generate basic knitting patterns customized to you.
      </h2>
      <div className="navigation-bar">
        <a href="/" className="how-to-link">
          How To Use
        </a>

        <a href="/" className="pattern-generator-link">
          Pattern Generator
        </a>

        <a href="/" className="about-link">
          About PurlBot
        </a>
      </div>
      <PatternGeneratorForm />
      <HowTo />
      <About />
      <Footer />
    </div>
  );
}
