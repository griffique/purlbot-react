import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./PatternGeneratorForm.css";
import PatternOutput from "./PatternOutput";
export default function PatternGenerator() {
  const [projectType, setProjectType] = useState("Select Your Project");

  const [name, setName] = useState("PurlBot User");
  const [gauge, setGauge] = useState();
  const [submitStatus, setSubmitStatus] = useState({ submitted: false });
  function handleName(event) {
    if (event.target.value.length > 0) {
      setName(event.target.value);
    }
  }
  function handleGauge(event) {
    {
      setGauge(event.target.value);
    }
  }
  function handleProjectType(event) {
    setProjectType(event.slice(2));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (gauge * 0 === 0) setSubmitStatus({ submitted: true });
    else {
      alert("Please enter a number for your gauge.");
    }
  }

  if (submitStatus.submitted) {
    return <PatternOutput project={projectType} name={name} gauge={gauge} />;
  } else
    return (
      <div id="pattern-generator" className="row">
        <div className="col-6">
          <img
            src="https://drive.google.com/uc?id=1aZ99clyDOzLS5mr09IDSKcggLH1O7kwT"
            className="pattern-generator-image"
            alt="knitting supplies"
          />
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <br />
              <h5 className="card-title">
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
                    title={projectType}
                    variant="info"
                    onSelect={handleProjectType}
                  >
                    <Dropdown.Item href="#/scarf" value="Scarf">
                      Scarf
                    </Dropdown.Item>
                    <Dropdown.Item href="#/hat" value="Hat">
                      Coming Soon: Hat
                    </Dropdown.Item>
                    <Dropdown.Item href="#/mittens" value="Mittens">
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
      </div>
    );
}
