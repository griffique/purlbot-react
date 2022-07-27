import React from "react";
import axios from "axios";

const Hat = (props) => {
  const handlePatternSave = () => {
    axios.post('/patterns', {
      gauge: props.gauge,
      type: 'hat',
      nickname: props.name
    })
    .then(function (response) {
      console.log(response);
      alert(`Pattern Saved! Type: Hat, Gauge: ${props.gauge}. View your patterns under 'My Account.'`)
    })
    .catch(function (error) {
      console.log(error);
      alert('Please log in to save your pattern.');
    });
  }
  return (
    <div className="card pattern-display">
      <h1 className="card-title">Your Hat Pattern</h1>
      <h4>Sizes are given as (children, women, men).</h4>
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
      <ol className="card-body">
        <li>
          Cast on ({props.gauge * 20}, {props.gauge * 23}, {props.gauge * 24})
          stitches.
        </li>
        <li>Knit in k1, p2 rib for 2.5 inches.</li>
        <li>Knit in your chosen body stitch for (4.5, 5, 6.5) inches.</li>
        <li>
          Complete decrease set-up round:
          <ul>
            <li>
              Knit in chosen stitch ((
              {props.gauge * 20 - 2}, {props.gauge * 23 - 2},{" "}
              {props.gauge * 24 - 2}
              ), k2tog, place marker.
            </li>
          </ul>
        </li>
        <li>
          Then continue decrease pattern:
          <ul>
            <li>Even rounds: knit in chosen stitch.</li>
            <li>
              Odd rounds: knit in chosen stitch to 2 before marker, k2tog.
            </li>
          </ul>
        </li>
        <li>
          Repeat these two rounds until you have (10, 11, 12) stitches left,
          ending on an odd round.{" "}
        </li>
        <li>
          Cut yarn leaving long tail and thread remaining stitches through,
          pulling tight and securing the end on the inside of the hat with a
          crochet hook.
        </li>{" "}
        <li>
          Weave in starting end and{" "}
          <a
            href="https://blog.knitpicks.com/tutorial-blocking-knits/"
            target="_blank" rel="noreferrer"
          >
            block hat
          </a>{" "}
          to measurements below.
        </li>
        <ul>
          <li> Children = (20" x 8.5")</li>
          <li> Women = (23" x 11")</li>
          <li> Men = (24" x 11.5")</li>
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

export default Hat;
