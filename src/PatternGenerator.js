import React, { useState } from "react";

export default function PatternGenerator() {
  const [submitStatus, setSubmitStatus] = useState({ submitted: false });
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitStatus({ submitted: true });
  }
  if (submitStatus.submitted) {
    return <h1>Test Mode: Coming Soon!</h1>;
  } else {
    return (
      <div id="display-area">
        <div className="card pattern-generator">
          <img
            src="https://drive.google.com/uc?id=1aZ99clyDOzLS5mr09IDSKcggLH1O7kwT"
            className="card-img-top pattern-generator-image"
            alt="knitting supplies"
          />
          <div className="card-body">
            <br />
            <h5 className="card-title" id="pattern-generator">
              Pattern Generator
            </h5>

            <form id="scarf-form" autoComplete="off">
              <br />
              <h5>Optional: enter your name.</h5>
              <input
                className="form-control"
                type="text"
                placeholder="Type your name here..."
                id="name"
              />
              <br />
              <h5>What do you want to knit?</h5>
              <div className="form-group">
                <select className="form-control" id="project-type">
                  <option>Scarf</option>
                  <option>Coming Soon: Hat</option>
                  <option>Coming Soon: Mittens</option>
                </select>
              </div>
              <br />
              <h5>
                On your gauge swatch, how many stitches do you count
                <strong> horizontally </strong> per inch?
              </h5>
              <input
                className="form-control"
                type="text"
                placeholder="Type a number here..."
                id="gauge"
              />
              <br />
              <input type="Submit" id="submit" onClick={handleSubmit} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
