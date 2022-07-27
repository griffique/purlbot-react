import React, { useState } from "react";
import axios from "axios";

const Mittens = (props) => {

  const handlePatternSave = () => {
    axios.post('/patterns', {
      gauge: props.gauge,
      type: 'mittens',
      nickname: props.name
    })
    .then(function (response) {
      console.log(response);
      alert(`Pattern Saved! Type: Mittens, Gauge: ${props.gauge}. View your patterns under 'My Account.'`)
    })
    .catch(function (error) {
      console.log(error);
      alert('Please log in to save your pattern.');
    });
  }

  const castVals = [
    Math.round(props.gauge * 5.5),
    Math.round(props.gauge * 6.5),
    Math.round(props.gauge * 7),
    Math.round(props.gauge * 8),
  ];

  const [castOn, setCastOn] = useState([]);

  // check for odd numbers and make even
  if (castOn.length < 4) {
    for (let i = 0; i < castVals.length; i++) {
      if (castVals[i] % 2 !== 0) {
        castVals[i] = castVals[i] + 1;
      }
      setCastOn([...castVals]);
    }
  }

  return (
    <div className="card pattern-display">
      <h1 className="card-title">Your Mitten Pattern</h1>
      <h4>Sizes are given as (children, adult S, M, L).</h4>
      <h4>
        See <a href="#measurements">measurements</a> below.
      </h4>
      <div className="pattern-button-area m-auto no-print">
        <button className="btn m-4 btn-info save-pattern" type="button" onClick={() => { handlePatternSave()} }>Save Pattern</button>
        <button
          onClick={() => {
            props.setStatus();
          }}
          className="reset btn m-4 btn-light"
        >
          ✖ RESET
        </button>
      </div>
      <h3 className="mt-4">
        <strong>Work cuff:</strong>
      </h3>
      <ol className="card-body">
        <li>
          Cast on ({castOn[0]}, {castOn[1]}, {castOn[2]}, {castOn[3]}) stitches
          with double pointed needles <strong>one size smaller</strong> than the
          needles you used to check your gauge.
        </li>
        <li>
          <strong>Place marker</strong> and join in the round.
        </li>
        <li>Work k1, p1 rib for (2.5, 3, 4, 4) inches.</li>
        <li>
          Switch to the <strong>larger needles</strong> (the ones you used to
          check your gauge.
        </li>
        <li>Knit in your chosen stitch for (.5, .75, .75, .75) inches.</li>
      </ol>
      <h3 className="mt-4">
        <strong>Work thumb gusset:</strong>
      </h3>
      <ol>
        <li>
          Set up round: m1, k1, m1, place marker. Knit in chosen stitch to end
          of round.
        </li>
        <li>Rounds 1 and 2: knit in chosen stitch.</li>
        <li>
          Round 3: m1, knit in chosen stitch to marker, m1, slip marker, knit in
          chosen stitch to end.
        </li>
        <li>
          Work rounds 1-3 for approximately (1.5, 2, 2, 2,25) inches, ending
          with round 3.
        </li>
        <li>
          Place stitches between the markers on a piece of waste yarn and leave
          to the side. Remove the extra marker so that only the beginning of
          round marker remains.
        </li>
      </ol>
      <h3 className="mt-4">
        <strong>Work and shape body:</strong>
      </h3>
      <ol>
        <li>
          Knit in chosen stitch until body measures (3, 3.75, 4, 4.5) inches
          from gusset.
        </li>
        <li>
          Decrease setup round: knit in chosen stitch (
          {Math.round((props.gauge * 5.5) / 2)},{" "}
          {Math.round((props.gauge * 6.5) / 2)},{" "}
          {Math.round(props.gauge * 7) / 2}, {Math.round((props.gauge * 8) / 2)}
          ), place marker, knit until end of round.
        </li>
        <li>
          Decrease round: *k1, ssk, knit in chosen stitch to 3 sts before
          marker, k2tog, k1*
        </li>
        <li>Work decrease round until 8 stitches remain.</li>
        <li>
          Break yarn and thread tail through remaining stitches; pull tight to
          secure.
        </li>
      </ol>
      <h3 className="mt-4">
        <strong>Work thumb:</strong>
      </h3>
      <ol>
        <li>
          Put held stitches on larger needles and knit in chosen stitch across,
          picking up 1 stitch from body of mitten.
        </li>
        <li>Place marker and join in the round.</li>
        <li>
          Knit in chosen stitch for (1.25, 1.75, 2, 2.25) inches from picked up
          stitch.
        </li>
        <li>*k2tog*</li>
        <li>
          Break yarn, threading through remaining stitches and pull tight to
          secure.
        </li>
      </ol>
      <h3 className="mt-4">
        <strong>Finishing:</strong>
      </h3>
      <ol id="measurements">
        <li>
          Weave in ends and{" "}
          <a
            href="https://blog.knitpicks.com/tutorial-blocking-knits/"
            target="_blank" rel="noreferrer"
          >
            block mittens
          </a>{" "}
          to measurements below.
        </li>
        <ul>
          <li> Children = (6" circum. x 8.5" long)</li>
          <li> Adult S = (7" x 10.5")</li>
          <li> Adult M = (7.75" x 12")</li>
          <li> Adult L = (8.5" x 13")</li>
        </ul>
      </ol>
      <button
        className="print btn btn-light no-print"
        onClick={() => {
          window.print();
        }}
      >
        📄 PRINT
      </button>
    </div>
  );
};

export default Mittens;
