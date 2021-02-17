import React from "react";
export default function PatternOutput(props) {
  return (
    <h1>
      Building a {props.project} for {props.name} with a gauge of {props.gauge}{" "}
      st/inch!
    </h1>
  );
}
