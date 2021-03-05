import React from "react";

export default function About() {
  return (
    <div class="card about-purlbot" id="about">
      <img
        src="https://drive.google.com/uc?id=1cmQAznp4h9S_K4EnyUjws1Mx2aJkm2Ga"
        class="card-img-top"
        alt="knitting supplies"
      />
      <div class="card-body">
        <h5 class="card-title" id="about-purlbot-text">
          About <span id="purl-title">Purl</span>
          <span id="bot-title">Bot</span>
        </h5>
        <p class="card-text">
          Have you ever found a stash of yarn left over from another project and
          thought, "what can I make with this?" You probably then browse through
          countless patterns trying to find something that works with your
          materials and gauge. That's where <span id="purl-title">Purl</span>
          <span id="bot-title">Bot</span> is different. You tell us a little bit
          about your project and we'll generate a basic pattern for you. Then
          you can customize with whatever cables, bobbles, or special stitches
          you want--just make sure to take this into account when you make your
          swatch.
        </p>
      </div>
    </div>
  );
}
