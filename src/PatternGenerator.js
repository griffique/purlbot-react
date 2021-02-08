import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function PatternGenerator() {
  const [projectType, setProjectType] = useState();
  const [dropdownTitle, setDropdownTitle] = useState("Select Your Project");
  const [name, setName] = useState();
  const [gauge, setGauge] = useState();
  const [submitStatus, setSubmitStatus] = useState({ submitted: false });
  function handleName(event) {
    setName(event.target.value);
  }
  function handleGauge(event) {
    setGauge(event.target.value);
  }
  function handleProjectType(e) {
    setProjectType(e);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitStatus({ submitted: true });
    console.log(projectType);
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
                onChange={handleName}
              />
              <br />
              <h5>What do you want to knit?</h5>
              <div className="form-group">
                <DropdownButton
                  id="dropdown-basic-button"
                  title={dropdownTitle}
                  variant="success"
                  onSelect={handleProjectType}
                >
                  <Dropdown.Item href="#/scarf">Scarf</Dropdown.Item>
                  <Dropdown.Item href="#/hat">Coming Soon: Hat</Dropdown.Item>
                  <Dropdown.Item href="#/mittens">
                    Coming Soon: Mittens
                  </Dropdown.Item>
                </DropdownButton>
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
                onChange={handleGauge}
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
