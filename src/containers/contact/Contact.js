import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Emoji from "../../components/emoji/emoji";

export default function Contact() {
  return (
    <div className="area main contact-margin-top" id="contact">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">
            Contact Me <Emoji emoji="☎️" />
          </h1>
          <p className="subTitle contact-subtitle">
            Discuss a project or just want to say hi my inbox is open for all
          </p>
        </div>
        <div className="contact-text-div">
          <h1 className="contact-detail">+972-546211797</h1>

          <h1 className="contact-detail-email">bjnhv13@gmail.com</h1>

          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
