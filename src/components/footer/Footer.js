import React from "react";
import Emoji from "../../components/emoji/emoji";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-div">
      <p className="footer-text">
        Made with<Emoji emoji="❤️" />by me
      </p>
    </div>
  );
}
