import React from "react";
import styles from "./Member.module.css";

export default function Member({
  name,
  title,
  img,
  linkedinAccount,
  instaAccount,
  xAccount,
}) {
  return (
    <div>
      <div className="d-flex flex-column">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className={`${styles.name} mt-2`}>{name}</div>
        <div className="mb-3">{title} </div>
        <div className="d-flex social-media">
          {" "}
          <a href={linkedinAccount}>
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href={xAccount}>
            <i class="fa-brands fa-x-twitter mx-3"></i>
          </a>
          <a href={instaAccount}>
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
