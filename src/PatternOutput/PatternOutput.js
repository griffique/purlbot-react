import React from "react";
import Hat from "./Hat";
import Scarf from "./Scarf";
import Mittens from "./Mittens";
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
        <div className="card col-sm-3">
          <img
            className="card-img-top"
            src="http://freeknitstitches.com/Images/106/106-big.jpg"
            alt="Image of pattern"
          />
          <div className="card-body">
            <h5 className="card-title">
              <a href="http://freeknitstitches.com/pattern.php?num=106&amp;menu=2">
                Forked Lightning
              </a>{" "}
              ⭐
            </h5>
          </div>
        </div>
        <div className="card col-sm-3">
          <img
            className="card-img-top"
            src="http://freeknitstitches.com/Images/216/216-big.jpg"
            alt="Image of pattern"
          />
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <a href="http://freeknitstitches.com/pattern.php?num=216&amp;menu=1">
                Twisted Rib
              </a>{" "}
              ⭐⭐
            </h5>
          </div>
        </div>
        <div className="card col-sm-3">
          <img
            className="card-img-top"
            src="http://freeknitstitches.com/Images/290/290-big.jpg"
            alt="Image of pattern"
          />
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <a href="http://freeknitstitches.com/pattern.php?num=290&amp;menu=4">
                Sine Wave
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
