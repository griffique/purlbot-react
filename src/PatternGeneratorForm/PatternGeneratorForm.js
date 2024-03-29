import React, { useState } from "react";
import {useLocation} from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import PatternOutput from "../PatternOutput/PatternOutput";

export default function PatternGenerator() {
  const [projectType, setProjectType] = useState("Select Your Project");
  const [name, setName] = useState("PurlBot User");
  const [gauge, setGauge] = useState();
  const [submitStatus, setSubmitStatus] = useState(false);


// Handle query params from backend saved patterns list

const search = useLocation().search;
const savedType = new URLSearchParams(search).get('type');
const savedGauge = new URLSearchParams(search).get('gauge');

if (savedType && savedGauge) {
  return (
    <PatternOutput
      setStatus={setSubmitStatus}
      project={savedType.toUpperCase()}
      gauge={savedGauge}
    />
  )
}

  function handleName(event) {
    if (event.target.value.length > 0) {
      setName(event.target.value);
    }
  }
  function handleGauge(event) {
      setGauge(event.target.value);
  }
  function handleProjectType(event) {
    setProjectType(event.slice(2).toUpperCase());
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (gauge * 0 === 0) setSubmitStatus(true);
    else {
      alert("Please enter a number for your gauge.");
    }
  }

  if (submitStatus) {
    return (
      <>
        <PatternOutput
          setStatus={setSubmitStatus}
          project={projectType}
          name={name}
          gauge={gauge}
        />
      </>
    );
  } else
    return (
      <div id={submitStatus ? null : "pattern-generator"}>
        <div className="card">
          <div className="card-body">
            <br />
            <h5 className="card-title">Pattern Generator</h5>

            <form id="scarf-form" autoComplete="off">
              <br />
              <h5>Optional: enter a nickname for the pattern.</h5>
              <input
                className="form-control"
                type="text"
                placeholder="Type your pattern's nickname here..."
                id="name"
                onChange={handleName}
              />
              <br />
              <h5>What do you want to knit?</h5>
              <div className="form-group">
                <DropdownButton
                  id="dropdown-basic-button"
                  title={projectType}
                  variant="primary"
                  onSelect={handleProjectType}
                >
                  <Dropdown.Item href="#/scarf" value="Scarf">
                    SCARF
                  </Dropdown.Item>
                  <Dropdown.Item href="#/hat" value="Hat">
                    HAT
                  </Dropdown.Item>
                  <Dropdown.Item href="#/mittens" value="Mittens">
                    MITTENS
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
            </form>
            <button
              className="btn btn-lg btn-success"
              type="button"
              id="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
}
