import React from "react";
import { Link } from "react-router-dom";
import {} from "./buttonstyle.modules.css";
export default function Button({
  message,
  to = "",
  className,
  height,
  bg = "#db4444",
  border = "none",
  color = "#fff",
  classNameforLink,
}) {
  return (
    <>
      <Link to={to} className={classNameforLink}>
        <button
          style={{
            height: height,
            backgroundColor: bg,
            border: border,
            color: color,
          }}
          className={`${className}`}
        >
          {message}
        </button>
      </Link>
    </>
  );
}
