import React from "react";
import Hat from "./Hat";
import Scarf from "./Scarf";
import "./PatternOutput.css";
export default function PatternOutput(props) {
  if (props.project === "SCARF" || props.project === "HAT")
    return (
      <div className="container">
        {props.project === "scarf" ? (
          <Scarf gauge={props.gauge} name={props.name} />
        ) : (
          <Hat gauge={props.gauge} name={props.name} />
        )}
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
    return <h1>Mitten Functionality Coming Soon. Check Back Later!</h1>;
  }
}
