import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import Emoji from "../../components/emoji/emoji";

export default function Greeting() {
  return (
    <div className="gretting-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              Hi all <Emoji emoji="👋" />
              I'm Nehemia Lilintal
            </h1>
            <p className="greeting-text-p subTitle">
              A passionate Full Stack Software Developer
              <Emoji emoji="🚀" />
            </p>
            <p className="greeting-text-p subTitle">
              having more then a 3 years experience in building Web
              applications with AngularJs / Reactjs / Nodejs and some other cool
              languages, libraries and frameworks.
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button
                text="See my resume"
                newTab={true}
                href="https://docs.google.com/document/d/1lH222ep2ncTJ7KbfD2BGh1gemUDDMiXemZsh6wO6ntM/edit?usp=sharing"
              />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img
            alt="man sitting on table"
            src={require("../../assests/images/manOnTable.svg")}
          ></img>
        </div>
      </div>
    </div>
  );
}
