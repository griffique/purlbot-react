import React from "react";
import Card from "react-bootstrap/Card";
export default function PatternOutput(props) {
  if (props.project === "scarf")
    return (
      <div className="container">
        <h1>{props.name}'s Scarf Pattern</h1>
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
        <h4>Suggested Stitches</h4>
        <div className="card">
          <img
            className="card-img-top"
            src="http://freeknitstitches.com/Images/106/106-big.jpg"
            alt="Image of pattern"
          />
          <div className="card-body">
            <h5 className="card-title">Forked Lightning ⭐</h5>

            <a
              href="http://freeknitstitches.com/pattern.php?num=106&menu=2"
              className="btn btn-primary"
            >
              Go to pattern
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="http://freeknitstitches.com/Images/216/216-big.jpg"
            alt="Image of pattern"
          />
          <div className="card-body">
            <h5 className="card-title">Twisted Rib ⭐⭐</h5>

            <a
              href="http://freeknitstitches.com/pattern.php?num=216&menu=1"
              className="btn btn-primary"
            >
              Go to pattern
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="http://freeknitstitches.com/Images/290/290-big.jpg"
            alt="Image of pattern"
          />
          <div className="card-body">
            <h5 className="card-title"> Sine Wave ⭐⭐⭐</h5>

            <a
              href="http://freeknitstitches.com/pattern.php?num=290&menu=4"
              className="btn btn-primary"
            >
              Go to pattern
            </a>
          </div>
        </div>

        <ul id="difficulty-ratings">
          <li>⭐ Easier </li>
          <li>⭐⭐ Intermediate </li>
          <li>⭐⭐⭐ Advanced</li>
        </ul>
        <h3>
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
