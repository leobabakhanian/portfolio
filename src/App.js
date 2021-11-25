import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" />
          <Route path="/more" />
          <Route path="/about" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
