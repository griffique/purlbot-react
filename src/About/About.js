import React from "react";

export default function About() {
  return (
    <div className="about-purlbot" id="about">
      <img
        src="/images/about.jpg"
        className="card-img-top img-fluid"
        alt="About Purlbot"
      />
      <div>
        <div className="text-area">
          <p>
            It's fun to go into your stash of leftover yarn and wonder, "what
            could I make with this?" Less fun is browsing through endless pages
            of patterns trying to find something that works with your yarn
            weight, gauge and amount.
          </p>
          <p>
            That's where <span id="purl-title-mini">Purl</span>
            <span id="bot-title-mini">Bot</span> is different. Just tell us a
            little bit about your project and we'll generate a basic pattern for
            you.
          </p>
        </div>
      </div>
    </div>
  );
}
