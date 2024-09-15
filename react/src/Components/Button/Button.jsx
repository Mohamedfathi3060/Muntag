import React from "react";
import { Link } from "react-router-dom";
import {} from "./buttonstyle.modules.css";
export default function Button({ message, to = "", className }) {
  return (
    <Link to={to}>
      <button className={`${className}`}>{message}</button>
    </Link>
  );
}
