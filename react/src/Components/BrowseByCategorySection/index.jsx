import React from "react";
import ProductCard from "../ProductCard";

export default function BroseByCategorySection({ items = null }) {
  return (
    <section>
      <div className="title m-0 d-flex align-items-center">
        <img
          src="./imgs/headerIcon.svg"
          alt="Section Title Icon"
          className="m-2"
        />
        <p className="fw-bold text-danger m-0">Categories</p>
      </div>
      <div className="d-flex justify-content-between ps-3 my-3">
        <div className="text">
          <h1 className="fw-bold">Browse By Catrgory</h1>
        </div>
        <div className="controlicons">
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
        </div>
      </div>
      <div className="cards d-flex flex-wrap g-4 justify-content-center my-5">
        {items ? (
          items.map((item) => <ProductCard item={item} />)
        ) : (
          <h1 className="text-danger my-2">No Categories From Server</h1>
        )}
      </div>
    </section>
  );
}
