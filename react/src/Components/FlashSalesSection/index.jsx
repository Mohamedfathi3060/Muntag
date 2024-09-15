import React from "react";
import ProductCard from "../ProductCard";

export default function FlashSaleSection({
  items = null,
  time: { days, hours, minutes, seconds },
}) {
  return (
    <section>
      <div className="title m-0 d-flex align-items-center">
        <img
          src="./imgs/headerIcon.svg"
          alt="Section Title Icon"
          className="m-2"
        />
        <p className="fw-bold text-danger m-0">Today's</p>
      </div>
      <div className="d-flex flex-wrap justify-content-md-between justify-content-center ps-3 my-3">
        <div className="text">
          <h1 className="fw-bold">Flash Sales</h1>
        </div>
        <div className="timer d-flex flex-wrap justify-content-between col-xl-3 col-lg-4 col-md-5 col-12">
          <div className="unit d-flex flex-column align-items-center">
            <span className="fw-bold">Days</span>
            <span className="fs-2 fw-bold">{days > 9 ? days : "0" + days}</span>
          </div>
          <div className="seperator my-4">
            <h2 className="text-danger">:</h2>
          </div>
          <div className="unit d-flex flex-column align-items-center">
            <span className="fw-bold">Hours</span>
            <span className="fs-2 fw-bold">
              {hours > 9 ? hours : "0" + hours}
            </span>
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
      <div className="cards col-12 d-flex flex-wrap g-4 my-5">
        <div className="row w-100">
          {/* {
            <ProductCard
              item={{
                name: "product",
                price: 1200,
                pricebeforediscout: 1400,
                rating: 3.5,
                raters: 50,
              }}
            />
          }
          {
            <ProductCard
              item={{
                name: "product2",
                price: 1200,
                pricebeforediscout: 2000,
                rating: 3,
                raters: 200,
              }}
            />
          }
          {
            <ProductCard
              item={{
                name: "product3",
                price: 100,
                rating: 3.5,
                raters: 50,
              }}
            />
          } */}
          {items ? (
            items.map((item) => <ProductCard item={item} />)
          ) : (
            <h1 className="text-danger my-2">No Products From Server</h1>
          )}
        </div>
      </div>
    </section>
  );
}
