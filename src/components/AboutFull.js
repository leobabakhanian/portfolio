import React from "react";
import AboutMain from "./AboutMain";
import CustomizedList from "./CustomizedList";
import "./AboutFull.css";
import { ProfileCard } from "./ProfileCard";

function AboutFull() {
  return (
    <div className="about-full">
      <AboutMain />
      <CustomizedList />
      <ProfileCard />
    </div>
  );
}

export default AboutFull;
