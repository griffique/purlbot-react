import React from "react";

export default function About() {
  return (
    <div className="about-purlbot" id="about">
      <img
        src="/images/aboutpurlbotpic.png"
        className="card-img-top"
        alt="knitting supplies"
      />
      <div>
        <div
          id="about-purlbot-text"
          style={{
            margin: "-500px 0 350px",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            fontSize: "200px",
          }}
        >
          <span id="bot-title-lg">About</span>
          <span id="purl-title-lg"> Purl</span>
          <span id="bot-title-lg">Bot</span>
        </div>
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
        <br />
      </div>
    </div>
  );
}
