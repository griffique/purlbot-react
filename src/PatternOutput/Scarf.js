import React from "react";
const Scarf = (props) => {
  return (
    <div className="card pattern-display">
      <h1 className="card-title">{props.name}'s Scarf Pattern</h1>
      <h4>Sizes are given as (child, adult). </h4>
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
            target="_blank"
          >
            Block
          </a>{" "}
          to measurements listed below.
        </li>
      </ol>
      <ul>
        {" "}
        <li> Children's scarf measurement = (6" x 48")</li>{" "}
        <li> Adult scarf measurement = (8" x 60")</li>
      </ul>
    </div>
  );
};

export default Scarf;
