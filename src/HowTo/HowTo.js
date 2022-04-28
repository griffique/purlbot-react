import React from "react";
export default function HowTo() {
  return (
    <div className="using-purlbot" id="how-to">
      <img
        src="/images/howto.jpg"
        className="card-img-top img-fluid"
        alt="How to use Purlbot"
      />
      <div>
        <div className="text-area">
          <ol>
            <li>
              Choose your yarn and determine approximately how many yards you
              have.
            </li>
            <li>Check the yarn label for suggested needle size.</li>
            <li>
              Using the yarn and needles you've chosen, knit a gauge swatch of
              at least 4" x 4" in the stitch you intend to use for your
              project.*
            </li>
            <li>
              Determine the number of stitches you knit in one inch, both
              horizontally and vertically. This is your gauge.
            </li>
            <li>Use PurlBot to generate a custom pattern!</li>
          </ol>
          <h6 className="note mt-3">
            *This is important because the stitch may change your gauge. A cable
            pattern, for example, will make it tighter, while a lace pattern
            often makes it looser.
          </h6>
        </div>
      </div>
    </div>
  );
}
