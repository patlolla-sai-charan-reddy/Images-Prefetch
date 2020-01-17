import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndividualImages from "./IndividualImages";
import App from "./App";

function RouteSetUp() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/details" component={IndividualImages} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouteSetUp />, rootElement);
