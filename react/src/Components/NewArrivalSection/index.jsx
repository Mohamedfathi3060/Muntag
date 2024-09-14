import React from "react";
import { Link } from "react-router-dom";

export default function NewArrivalSection() {
  return (
    <section>
      <div className="title m-0 d-flex align-items-center">
        <img
          src="./imgs/headerIcon.svg"
          alt="Section Title Icon"
          className="m-2"
        />
        <p className="fw-bold text-danger m-0">Featured</p>
      </div>
      <div className="d-flex justify-content-between ps-3 my-3">
        <div className="text">
          <h1 className="fw-bold">New Arrival</h1>
        </div>
        {/* <div className="controlicons">
            <span className="leftarrow">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                <path
                  d="M22 16L15 23L22 30M15 23H31"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="rightarrow">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
                <path
                  d="M14.5 23H31M31 23L24 16M31 23L24 30"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div> */}
      </div>
      <div className="cards d-flex flex-wrap">
        <div className="col-md-5 col-12 me-lg-5">
          <div className="productcard position-relative m-2 h-100">
            <img
              src="./imgs/ps5-slim-goedkope-playstation_large 1.png"
              alt="playstation_large"
              className="w-100 pt-3"
            />
            <div className="position-absolute z-2 text-white m-4 bottom-0">
              <div className="title">PlayStation 5</div>
              <div className="description my-2">
                Black and White version of the PS5 <br />
                coming out on sale.
              </div>
              <Link to="" className="link-light">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="productcard position-relative m-2">
            <img
              src="./imgs/attractive-woman-wearing-hat-posing-black-background 1.png"
              alt="attractive-woman-wearing-hat"
              className="w-100"
            />
            <div className="position-absolute z-2 text-white m-4 bottom-0">
              <div className="title">Women’s Collections</div>
              <div className="description my-2">
                Featured woman collections that <br />
                give you another vibe.
              </div>
              <Link to="" className="link-light">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="d-flex flex-wrap m-2">
            <div className="col-md-6 col-12">
              <div className="productcard position-relative d-flex justify-content-around h-100 mt-3 p-3 me-3">
                <img
                  src="./imgs/speakers.png"
                  alt="speakers"
                  className="w-50"
                />
                <div className="position-absolute z-2 text-white m-4 bottom-0 start-0">
                  <div className="title">Speakers</div>
                  <div className="description my-1">
                    Amazon wireless speakers
                  </div>
                  <Link to="" className="link-light">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="productcard position-relative d-flex justify-content-around h-100 mt-3 p-3">
                <img src="./imgs/Perfume.png" alt="Perfume" className="w-50" />
                <div className="position-absolute z-2 text-white m-4 bottom-0 start-0">
                  <div className="title">Perfume</div>
                  <div className="description my-1">GUCCI INTENSE OUD EDP</div>
                  <Link to="" className="link-light">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
