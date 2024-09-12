import React from "react";
import { notfound } from "./style.modules.css";

export default function NotFound() {
  return (
    <div className="container my-5 py-5">
      <div className="row text-center align-items-center py-5">
        <h1 className="fw-bolder text-uppercase text-black">404</h1>
        <h2 className="fw-bolder text-uppercase text-black">Page Not FOund</h2>
      </div>
    </div>
  );
}
