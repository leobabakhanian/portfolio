import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/pages/Projects";
import More from "./components/pages/More";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/more" exact component={More} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
