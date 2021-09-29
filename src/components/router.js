import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import App from "../App";
import AboutUs from "./about";
import ContactUs from "./contact";
const routs = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routs, document.getElementById("root"));
