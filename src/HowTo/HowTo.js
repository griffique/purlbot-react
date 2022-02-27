import React from "react";
export default function HowTo() {
  return (
    <div className="card using-purlbot" id="how-to">
      <img
        src="https://drive.google.com/uc?id=1dKworEstqhPX1qisQAAC0Hgy4tehL_UY"
        className="card-img-top"
        alt="yarn stash"
      />
      <div className="card-body">
        <h5 className="card-title">
          How to Use <span id="purl-title">Purl</span>
          <span id="bot-title">Bot</span>
        </h5>
        <ol className="card-text">
          <li>
            Choose your yarn and determine approximately how many yards you
            have.
          </li>
          <li>Check the yarn label for suggested needle size.</li>
          <li>
            Using the yarn and needles you've chosen, knit a gauge swatch of at
            least 4" x 4" in the stitch you intend to use for your project.*
          </li>
          <li>
            Determine the number of stitches you knit in one inch, both
            horizontally and vertically. This is your gauge.
          </li>
          <li>
            Use PurlBot to see what you can make and generate a custom pattern!
          </li>
        </ol>
        <p className="note mt-3">
          *This is important because the stitch may change your gauge. A cable
          pattern, for example, will make it tighter, while a lace pattern often
          makes it looser. For more on gauge, see{" "}
          <a
            href="https://www.purlsoho.com/create/2020/08/20/all-about-gauge/"
            target="_blank"
          >
            this post by Purl Soho.
          </a>
        </p>
      </div>
    </div>
  );
}
