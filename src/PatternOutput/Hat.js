import React from "react";
const Hat = (props) => {
  return (
    <div className="card pattern-display">
      <h1 className="card-title">{props.name}'s Hat Pattern</h1>
      <h4>Sizes are given as (children, women, men). </h4>
      <ol className="card-body">
        <li>
          Cast on ({props.gauge * 20}, {props.gauge * 23}, {props.gauge * 24})
          stitches.
        </li>
        <li>Knit for (7, 7.5, 8) inches.</li>
        <li>
          Complete decrease set-up round:
          <ul>
            <li>
              Knit ((
              {props.gauge * 20 - 2}, {props.gauge * 23 - 2},{" "}
              {props.gauge * 24 - 2}
              ), k2tog, place marker.
            </li>
          </ul>
        </li>
        <li>
          Then continue decrease pattern:
          <ul>
            <li>Even rounds: knit.</li>
            <li>Odd rounds: knit to 2 before marker, k2tog.</li>
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
            target="_blank"
          >
            block hat
          </a>{" "}
          to measurements below.
        </li>
      </ol>
      <ul>
        {" "}
        <li> Children's Hat Measurement = (20" x 8.5")</li>
        <li> Women's Hat Measurement = (23" x 11")</li>
        <li> Men's Hat Measurement = (24" x 11.5")</li>
      </ul>
    </div>
  );
};

export default Hat;
