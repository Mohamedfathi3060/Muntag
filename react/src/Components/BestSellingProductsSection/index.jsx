import React from "react";
import ProductCard from "../ProductCard";

export default function BestSellingProductsSection({ items = null }) {
  return (
    <section>
      <div className="title m-0 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="./imgs/headerIcon.svg"
            alt="Section Title Icon"
            className="m-2"
          />
          <p className="fw-bold text-danger m-0">This Months</p>
        </div>
        <button type="button" className="btn btn-danger">
          View All
        </button>
      </div>
      <div className="d-flex justify-content-between ps-3 my-3">
        <div className="text">
          <h1 className="fw-bold">Best Selling Products</h1>
        </div>
      </div>
      <div className="cards d-flex flex-wrap g-4 my-5">
        {" "}
        {items ? (
          items.map((item) => <ProductCard item={item} />)
        ) : (
          <h1 className="text-danger my-2">No Products From Server</h1>
        )}
      </div>
    </section>
  );
}
