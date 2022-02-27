import React from "react";

export default function About() {
  return (
    <div className="card about-purlbot" id="about">
      <img
        src="https://drive.google.com/uc?id=1cmQAznp4h9S_K4EnyUjws1Mx2aJkm2Ga"
        className="card-img-top"
        alt="knitting supplies"
      />
      <div className="card-body">
        <h5 className="card-title" id="about-purlbot-text">
          About<span id="purl-title"> Purl</span>
          <span id="bot-title">Bot</span>
        </h5>
        <p className="card-text">
          It's fun to go into your stash of leftover yarn and wonder, "what
          could I make with this?" Less fun is browsing through endless pages of
          patterns trying to find something that works with your yarn weight,
          gauge and amount.
        </p>
        <p className="card-text">
          That's where <span id="purl-title-mini">Purl</span>
          <span id="bot-title-mini">Bot</span> is different. Just tell us a
          little bit about your project and we'll generate a basic pattern for
          you.
        </p>
      </div>
    </div>
  );
}
