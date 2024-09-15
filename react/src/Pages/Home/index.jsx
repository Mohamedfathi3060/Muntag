import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import { Link } from "react-router-dom";
import {
  categories,
  layout,
  layoutimg,
  layouttrackers,
  activetrackerpoint,
  controlicons,
  cards,
  activecard,
  card,
  categoryicon,
  cardimg,
  icons,
  activeexploreproductcard,
  clickedIcon,
  productcard,
} from "./style.modules.css";
import FlashSaleSection from "../../Components/FlashSalesSection";
import BroseByCategorySection from "../../Components/BrowseByCategorySection";
import BestSellingProductsSection from "../../Components/BestSellingProductsSection";
import ExploreOurProductsSection from "../../Components/ExploreOurProductsSection";
import NewArrivalSection from "../../Components/NewArrivalSection";
import FeaturesSection from "../../Components/FeaturesSection";

export default function Home() {
  let [time, setTime] = useState({
    days: 10,
    hours: 5,
    minutes: 30,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section>
        <div className="row">
          <div className="col-lg-3 col-12 ps-0 border-lg-right">
            <div className="categories">
              <ul className="d-flex flex-column g-2 w-100 mt-4 list-unstyled">
                <li className="d-flex justify-content-between">
                  <Link
                    to="#"
                    className="link-dark link-underline-opacity-0"
                    title="Women's Fashion"
                  >
                    <p className="fw-bold">Women's Fashion</p>
                  </Link>
                </li>
                <li className="d-flex justify-content-between">
                  <Link
                    to="#"
                    className="link-dark link-underline-opacity-0"
                    title="Women's Fashion"
                  >
                    <p className="fw-bold">Men's Fashion</p>
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="link-dark link-underline-opacity-0"
                    title="Electronics"
                  >
                    <p className="fw-bold">Electronics</p>
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="link-dark link-underline-opacity-0"
                    title="Home & Lifestyle"
                  >
                    <p className="fw-bold">Home & Lifestyle</p>
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="link-dark link-underline-opacity-0"
                    title="Medicine"
                  >
                    <p className="fw-bold">Medicine</p>
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="link-dark link-underline-opacity-0"
                    title="Sports & Outdoor"
                  >
                    <p className="fw-bold">Sports & Outdoor</p>
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="link-dark link-underline-opacity-0"
                    title="Baby & Toys"
                  >
                    <p className="fw-bold">Baby & Toys</p>
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="link-dark link-underline-opacity-0"
                    title="Groceries & Pets"
                  >
                    <p className="fw-bold">Groceries & Pets</p>
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="link-dark link-underline-opacity-0"
                    title="Health & Beauty"
                  >
                    <p className="fw-bold">Health & Beauty</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-12 px-lg-5 px-0">
            <div className="layout d-flex col-12 bg-black px-lg-0 mt-lg-4 position-relative">
              <div className="layouttext col-md-4 py-5 ps-5">
                <p className="text-white productname">iPhone 14 Series</p>
                <h1 className="text-white marketingline my-2">
                  Up to 10% off Voucher
                </h1>
                <div>
                  <Link
                    to="#"
                    className="text-white text-decoration-none border-bottom border-light"
                  >
                    Shop Now
                  </Link>
                  <Link to="#" title="Shop Now" className="text-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 12H20M20 12L13 5M20 12L13 19"
                        stroke="#FAFAFA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="layoutimg col-md-6 offset-1 pt-5 pe-lg-5 pe-2">
                <img src="imgs/cover-product-1.jpeg" alt="" className="w-100" />
              </div>
              <div className="layouttrackers">
                <ul className="d-flex w-100 justify-content-center w-100 m-0 list-unstyled"></ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <FlashSaleSection items={null} time={time} />
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
      <BroseByCategorySection items={null} />
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
      <BestSellingProductsSection items={null} />
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
      <ExploreOurProductsSection items={null} />
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
      <NewArrivalSection />
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
      <FeaturesSection />
    </>
  );
}
