import React from "react";
import axios from "axios";

const Scarf = (props) => {

  const handlePatternSave = () => {
    axios.post('/patterns', {
      gauge: props.gauge,
      type: 'scarf',
      nickname: props.name
    })
    .then(function (response) {
      console.log(response);
      alert(`Pattern Saved! Type: Scarf, Gauge: ${props.gauge}. View your patterns under 'My Account.'`)
    })
    .catch(function (error) {
      console.log(error);
      alert('Please log in to save your pattern.');
    });
  }

  return (
    <div className="card pattern-display">
      <h1 className="card-title">Your Scarf Pattern</h1>
      <h4>Sizes are given as (child, adult).</h4>
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
          Cast on ({props.gauge * 6}, {props.gauge * 8}) stitches.{" "}
        </li>
        <li>
          Knit in your chosen stitch until you measure (48, 60) inches from cast
          on, or desired length, and bind off in pattern.
        </li>
        <li>
          <a
            href="https://blog.knitpicks.com/tutorial-blocking-knits/"
            target="_blank" rel="noreferrer"
          >
            Block
          </a>{" "}
          to measurements listed below.
        </li>
        <ul>
          <li> Children = (6" x 48")</li>
          <li> Adult = (8" x 60")</li>
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

export default Scarf;
