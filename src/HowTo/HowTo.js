import React from "react";
export default function HowTo() {
  return (
    <div className="using-purlbot" id="how-to">
      <img
        src="/images/knitconfetti.png"
        className="img-fluid"
        alt="yarn stash"
      />
      <div>
        <div
          className="title"
          style={{
            margin: "-225px 0 100px",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            fontSize: "200px",
          }}
        >
          <span id="bot-title-lg">How to Use </span>
          <span id="purl-title-lg" style={{ marginLeft: "20px" }}>
            {" "}
            Purl
          </span>
          <span id="bot-title-lg">Bot</span>
        </div>
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
