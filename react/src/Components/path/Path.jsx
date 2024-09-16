import React from "react";
import styles from "./pathstyle.module.css";
export default function Path({ previus, current }) {
  return (
    <div>
      {previus.map((previus) => {
        return (
          <span className={styles.prev}>
            {previus} <span className="px-2">/</span>
          </span>
        );
      })}
      <span className={styles.curr}>{current}</span>
    </div>
  );
}
