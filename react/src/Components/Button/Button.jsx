import React from "react";
import { Link } from "react-router-dom";
import {} from "./buttonstyle.modules.css";
export default function Button({ message, to = "", className, height }) {
  return (
    <Link to={to}>
      <button style={{ height: height }} className={`${className}`}>
        {message}
      </button>
    </Link>
  );
}
