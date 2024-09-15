import React from "react";
import {} from "./pathstyle.modules.css";
export default function Path({ previus, current }) {
  return (
    <div>
      {previus.map((previus) => {
        return (
          <span className="prev">
            {previus} <span className="px-2">/</span>
          </span>
        );
      })}
      {current}
    </div>
  );
}
