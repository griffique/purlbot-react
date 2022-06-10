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
            What if a knitting pattern could be customized to your gauge?
            Imagine, no more creating and measuring multiple swatches, switching
            out needles until you find a match.
          </p>
          <p>
            <span id="purl-title-body">Purl</span>
            <span id="bot-title-body">Bot</span> makes that vision a reality.
            Just tell us your gauge and we'll generate a basic scarf, hat or
            mitten pattern for you.
          </p>
        </div>
      </div>
    </div>
  );
}
