import React from "react";
import "./PatternOutput.css";
export default function PatternOutput(props) {
  if (props.project === "scarf")
    return (
      <div className="container">
        <div className="card pattern-display">
          <h1 className="card-title">{props.name}'s Scarf Pattern</h1>
          <h4>Sizes are given as (child, adult). </h4>
          <p className="card-body">
            Cast on ({props.gauge * 6}, {props.gauge * 8}) stitches. Knit in
            your chosen stitch until you measure (48, 60) inches from cast on,
            or desired length, and bind off in pattern.{" "}
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
        <h3 className="stitch-title">Suggested Stitches</h3>{" "}
        <ul className="difficulty-ratings">
          <li>⭐ Easier </li>
          <li>⭐⭐ Intermediate </li>
          <li>⭐⭐⭐ Advanced</li>
        </ul>
        <div className="row stitch-display">
          <div className="card col-sm-3">
            <img
              className="card-img-top"
              src="http://freeknitstitches.com/Images/106/106-big.jpg"
              alt="Image of pattern"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a href="http://freeknitstitches.com/pattern.php?num=106&menu=2">
                  Forked Lightning ⭐
                </a>
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
                <a href="http://freeknitstitches.com/pattern.php?num=216&menu=1">
                  Twisted Rib ⭐⭐
                </a>
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
                <a href="http://freeknitstitches.com/pattern.php?num=290&menu=4">
                  Sine Wave ⭐⭐⭐
                </a>
              </h5>
            </div>
          </div>
        </div>
        <h3 className="yarn-calculator">
          {" "}
          Not sure if you have enough yarn for your project?{" "}
          <a href="https://www.JimmyBeansWool.com/knittingCalculator">
            Find out here.
          </a>
        </h3>
      </div>
    );
  else {
    return <h1>Hat and Mitten Functionality Coming Soon. Check Back Later!</h1>;
  }
}
