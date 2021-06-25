import React from "react";
import "./App.css";
import PatternGeneratorForm from "./PatternGeneratorForm";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from "./NavBar";
import Footer from "./Footer.js";
import HowTo from "./HowTo.js";
import About from "./About.js";

export default function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <h1 className="subtitle">
          Generate basic knitting patterns customized to you.
        </h1>
        <Switch>
          <Route path="/" exact component={PatternGeneratorForm}></Route>
          <Route path="/how-to" exact component={HowTo}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
