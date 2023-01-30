import React from "react";
import Hat from "./Hat";
import Scarf from "./Scarf";
import Mittens from "./Mittens";
import zigzag from "./zigzag.jpg";
import star from "./star.jpg";
import moss from "./double-moss.jpg";

import "./PatternOutput.css";

export default function PatternOutput(props) {
  const project = () => {
    switch (props.project) {
      case "SCARF":
        return (
          <Scarf
            setStatus={props.setStatus}
            gauge={props.gauge}
            name={props.name}
          />
        );
      case "HAT":
        return (
          <Hat
            setStatus={props.setStatus}
            gauge={props.gauge}
            name={props.name}
          />
        );
      case "MITTENS":
        return (
          <Mittens
            setStatus={props.setStatus}
            gauge={props.gauge}
            name={props.name}
          />
        );
      default:
        return <p>Please select a valid pattern type.</p>;
    }
  };
  return (
    <div className="container">
      {project()}
      <h3 className="stitch-title no-print">Suggested Stitches</h3>{" "}
      <ul className="difficulty-ratings no-print">
        <li>⭐ Easier </li>
        <li>⭐⭐ Intermediate </li>
        <li>⭐⭐⭐ Advanced</li>
      </ul>
      <div className="row stitch-display no-print">
        <div className="card col-sm-3 no-print">
          <img
            className="card-img-top"
            src={moss}
            alt="pattern"
          />
          <div className="card-body">
            <h5 className="card-title">
              <a target="_blank" rel="noreferrer" href="https://nimble-needles.com/stitches/the-double-moss-stitch-knitting-pattern/">
                Double Moss Stitch
              </a>{" "}
              ⭐
            </h5>
          </div>
        </div>
        <div className="card col-sm-3 no-print">
          <img
            className="card-img-top"
            src={zigzag}
            alt="pattern"
          />
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <a target="_blank" rel="noreferrer" href="https://nimble-needles.com/stitches/how-to-knit-the-zig-zag-stitch/">
                ZigZag Rib Stitch
              </a>{" "}
              ⭐⭐
            </h5>
          </div>
        </div>
        <div className="card col-sm-3 no-print">
          <img
            className="card-img-top"
            src={star}
            alt="pattern"
          />
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <a target="_blank" rel="noreferrer" href="https://nimble-needles.com/stitches/how-to-knit-the-star-stitch/">
                Star Stitch
              </a>{" "}
              ⭐⭐⭐
            </h5>
          </div>
        </div>
      </div>
      <h3 className="yarn-calculator no-print">
        Not sure if you have enough yarn for your project?{" "}
        <a href="https://www.JimmyBeansWool.com/knittingCalculator">
          Find out here.
        </a>
      </h3>
    </div>
  );
}
