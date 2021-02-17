import React from "react";
export default function PatternOutput(props) {
  if (props.project === "scarf")
    return (
      <div className="patternDisplay">
        <h1>
          {props.name}'s {props.project} Pattern
        </h1>
        <h3>Sizes are given as (child, adult). </h3>
        <p>
          Cast on ({props.gauge * 6}, {props.gauge * 8}) stitches. Knit in your
          chosen stitch until you measure (48, 60) inches from cast on, or
          desired length, and bind off in pattern.{" "}
          <a
            href="https://blog.knitpicks.com/tutorial-blocking-knits/"
            target="_blank"
          >
            Block{" "}
          </a>
          to measurements listed below.{" "}
        </p>
        <ul>
          {" "}
          <li> Children's scarf measurement = (6" x 48")</li>{" "}
          <li> Adult scarf measurement = (8" x 60")</li>
        </ul>
      </div>
    );
  else {
    return <h1>Hat and Mitten Functionality Coming Soon. Check Back Later!</h1>;
  }
}
