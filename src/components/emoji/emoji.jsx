import React from "react";
import "./emoji.css";

export default function Emoji({ emoji, className  }) {
  return (
    <span
      aria-label="emoji"
      role="img"
      className={`emoji-wrapper ${className && className}`}
    >
      {emoji}
    </span>
  );
}
