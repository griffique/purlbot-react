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
        <button>How to Use </button>

        <a href="/" className="pattern-generator-link">
          Pattern Generator
        </a>

        <button>About PurlBot</button>
      </div>
      <PatternGeneratorForm />
      <HowTo />
      <About />
      <Footer />
    </div>
  );
}
