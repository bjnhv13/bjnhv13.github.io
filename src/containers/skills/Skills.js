import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <img alt="man Working" src={require("../../assests/images/developerActivity.svg")}></img>
        </div>
        <div className="skills-text-div">
          <h1 className="skills-heading">What i do </h1>
          <p className="subTitle skills-text-subtitle">FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK </p>
          <SoftwareSkill />
          <div>
            <p className="subTitle skills-text">Develop highly interactive Front end / User Interfaces for your web applications</p>
            <p className="subTitle skills-text"> React / NodeJs / MongoDb </p>
          </div>
        </div>
      </div>
    </div>
  );
}
