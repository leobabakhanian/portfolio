import React from "react";
import AboutMain from "./AboutMain";
import CustomizedList from "./CustomizedList";
import "./AboutFull.css";
import AboutSecond from "./AboutSecond";

function AboutFull() {
  return (
    <div className="about-full">
      <AboutMain />
      <CustomizedList />
      <AboutSecond />
    </div>
  );
}

export default AboutFull;
