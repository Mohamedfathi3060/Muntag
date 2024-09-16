import React from "react";
import up from "../../imgs/Drop-Up-Small.png";
import down from "../../imgs/Drop-Down-Small.png";
import cancel from "../../imgs/icon-cancel.png";
import styles from "./style.module.css";
export default function ProductCard({ img, title, price }) {
  return (
    <div className={`${styles.row} row my-5 align-items-center`}>
      <div className={`${styles.cancel}`}>
        {" "}
        <img src={cancel} alt="" />
      </div>
      <div className="col-3">
        <img src={img} alt="" />
        <span className="ms-3 title">{title}</span>
      </div>
      <div className="col-3 text-center">${price}</div>
      <div className={`col-3 text-center ${styles.inputWrapper}`}>
        <input
          type="number"
          min="1"
          max="10"
          className={`${styles.customInput}`}
          value={1}
        />
        <div className={styles.arrows}>
          <img src={up} alt="" />
          <img src={down} alt="" />
        </div>
      </div>
      <div className="col-3 text-end">$650</div>
    </div>
  );
}
