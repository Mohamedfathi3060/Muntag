import React from "react";

export default function Timer({ time: { days, hours, minutes, seconds } }) {
  return (
    <div className="timer d-flex flex-wrap justify-content-between col-xxl-3 col-lg-4 col-md-5 col-12">
      <div className="unit d-flex flex-column align-items-center">
        <span className="fw-bold">Days</span>
        <span className="fs-2 fw-bold">{days > 9 ? days : "0" + days}</span>
      </div>
      <div className="seperator my-4">
        <h2 className="text-danger">:</h2>
      </div>
      <div className="unit d-flex flex-column align-items-center">
        <span className="fw-bold">Hours</span>
        <span className="fs-2 fw-bold">{hours > 9 ? hours : "0" + hours}</span>
      </div>
      <div className="seperator my-4">
        <h2 className="text-danger">:</h2>
      </div>
      <div className="unit d-flex flex-column align-items-center">
        <span className="fw-bold">Minutes</span>
        <span className="fs-2 fw-bold">
          {minutes > 9 ? minutes : "0" + minutes}
        </span>
      </div>
      <div className="seperator my-4">
        <h2 className="text-danger">:</h2>
      </div>
      <div className="unit d-flex flex-column align-items-center">
        <span className="fw-bold">Seconds</span>
        <span className="fs-2 fw-bold">
          {seconds > 9 ? seconds : "0" + seconds}
        </span>
      </div>
    </div>
  );
}
