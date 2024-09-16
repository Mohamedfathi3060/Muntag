import React from "react";
import ProductCard from "../ProductCard";

export default function ProductsSection({
  items = null,
  sectionHeader,
  sectionName,
  toggler,
  children,
}) {
  return (
    <section className="p-0">
      <div className="title m-0 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="./imgs/headerIcon.svg"
            alt="Section Title Icon"
            className="m-2"
          />
          <p className="fw-bold text-danger m-0">{sectionHeader}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between ps-3 my-3">
        <div className="row w-100 justify-content-between">
          <div className="col-md-3">
            <div className="text">
              <h1 className="fw-bold">{sectionName}</h1>
            </div>
          </div>
          {children && children}
          {toggler && toggler}
        </div>
      </div>
      <div className="cards d-flex flex-wrap g-4 my-5">
        {" "}
        {items ? (
          items.map((item) => <ProductCard item={item} />)
        ) : (
          <h1 className="text-danger my-2">No Data From Server</h1>
        )}
      </div>
      <div className="divider d-flex justify-content-center my-5">
        <svg
          width="1170"
          height="1"
          viewBox="0 0 1170 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            opacity="0.3"
            x1="1170"
            y1="0.25"
            y2="0.25"
            stroke="black"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
