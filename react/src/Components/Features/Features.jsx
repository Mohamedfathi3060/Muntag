import React from "react";
import styles from "./Features.module.css";
export default function Features({ numberOf, description, logo, className }) {
  return (
    <div className={`${styles.card} ${className ? styles.active : ""}`}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className={`${styles.num} mt-3 mb-1`}>{numberOf}K</div>
        <div className="feature-description">{description} </div>
      </div>
    </div>
  );
}
