import React from "react";
import "./StartupProjects.css";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">Big Projects</h1>
        <p className="subTitle project-subtitle">SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH.</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            <div className="liveu-div" onClick={() => openProjectInNewWindow("https://www.liveu.tv/")}>
              <img alt="LiveU" src={require("../../assests/images/LiveU_Trans(On_White)_300x300.png")}></img>
            </div>
            <div className="lbd-div" onClick={() => openProjectInNewWindow("https://lbd.co.il/")}>
              <img alt="LBD" src={require("../../assests/images/lbd_logo_light.png")}></img>
            </div>
            <div className="attollo-div" onClick={() => openProjectInNewWindow("http://attollo.io/index.html")}>
              <img alt="attollo" src={require("../../assests/images/attollo-logo.png")}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
