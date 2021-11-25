import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1 className="typewriter">Hey, my name is Leo.</h1>
      <p>Check out my work.</p>
      <div className="hero-btns">
        <Link to="/projects">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            PROJECTS
          </Button>
        </Link>
        <Link to="/about">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            ABOUT ME
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
