import React from "react";
import "./App.css";
import PatternGeneratorForm from "../PatternGeneratorForm/PatternGeneratorForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js";
import Footer from "../Footer/Footer.js";
import HowTo from "../HowTo/HowTo.js";
import About from "../About/About.js";

export default function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
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
