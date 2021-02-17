import React from "react";
export default function PatternOutput(props) {
  if (props.project === "scarf")
    return (
      <h1>
        Building a {props.project} for {props.name} with a gauge of{" "}
        {props.gauge} st/inch!
      </h1>
    );
  else
    return (
      <h1>"Mitten and Hat Functionality Coming Soon! Check back later.</h1>
    );
}
