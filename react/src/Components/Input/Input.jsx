import React from "react";
import styles from "./Inputstyle.module.css";
export default function Input({
  label = "",
  placeholder = "",
  value,
  onChange,
  type,
  className,
  height,
}) {
  return (
    <>
      {label && <label className="mb-1">{label}</label>}

      {type === "text" ? (
        <textarea
          placeholder={placeholder}
          type={type}
          className={`${className} ${styles.input}`}
          style={{ height: height }}
        ></textarea>
      ) : (
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          className={`${className} ${styles.input}`}
        />
      )}
    </>
  );
}
