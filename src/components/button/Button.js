import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        rel="noopener noreferrer"
        target={newTab && "_blank"}
      >
        {text}
      </a>
    </div>
  );
}
