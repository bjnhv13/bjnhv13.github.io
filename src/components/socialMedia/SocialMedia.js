import React from "react";
import "./SocialMedia.css";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        title="github"
        href="https://github.com/bjnhv13"
        rel="noopener noreferrer"
        className="icon-button github"
        target="_blank"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a
        title="linkedin"
        href="https://www.linkedin.com/in/nehemia-lilintal-92649713a"
        rel="noopener noreferrer"
        className="icon-button linkedin"
        target="_blank"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        title="facebook"
        href="https://www.facebook.com/bjnhv.lili"
        rel="noopener noreferrer"
        className="icon-button facebook"
        target="_blank"
      >
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
      <a
        title="send mail"
        href="mailto:bjnhv13@gmail.com"
        rel="noopener noreferrer"
        className="icon-button google"
        target="_blank"
      >
        <i className="fa fa-envelope"></i>
        <span></span>
      </a>
    </div>
  );
}
