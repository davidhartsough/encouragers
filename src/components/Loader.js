import React from "react";
import "./Loader.css";

export default function Loader({ size = 5 }) {
  return (
    <div
      className="loader"
      style={{ width: `${size}rem`, height: `${size}rem` }}
    />
  );
}
