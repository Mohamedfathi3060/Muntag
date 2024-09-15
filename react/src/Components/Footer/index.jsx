import React from "react";
import { content,
  icons,
  inputContainer,
 } from "./footer.modules.css";
export default function Footer() {
  return (
    <footer>
      <div className="content d-flex justify-content-between">
        <ul>
          <li>
            <h3>Muntag</h3>
          </li>
          <li className="my-4">
            <h6>Subscribe</h6>
          </li>
          <li className="mb-3 fw-light">Get 10% off your first order</li>
          <li>
            <div className="inputContainer">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <img src="./imgs/icon-send.svg" alt="" />
            </div>
          </li>
        </ul>
        <ul>
          <li className="mb-4">
            <h5>Support</h5>
          </li>
          <li>
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </li>
          <li className="my-3">muntag@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
        <ul>
          <li className="mb-4">
            <h5>Account</h5>
          </li>
          <li>
            <a href="">My Account</a>
          </li>
          <li className="my-3">
            <a href="">Login / Register</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <li className="my-3">
            <a href="">Wishlist</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
        </ul>
        <ul>
          <li className="mb-4">
            <h5>Quick Link</h5>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li className="my-3">
            <a href="">Terms Of Use</a>
          </li>
          <li className="mb-3">
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <ul>
          <li className="mb-4">
            <h5>Download App</h5>
          </li>
          <li className="fw-light">Save $3 with App New User Only</li>
          <li>
            <div className="d-flex mt-1 mb-4">
              <div className="me-1">
                <img src="./imgs/Qr Code.png" alt="" />
              </div>
              <div className="d-flex flex-column apps">
                <img src="./imgs/GooglePlaysvg.svg" alt="" />
                <img src="./imgs/AppStoresvg.svg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <ul className="d-flex icons">
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="mx-4">
                <a href="">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li className="me-4">
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr />
      <p className="text-center pb-4">
        © Copyright MMA 2024. All right reserved
      </p>
    </footer>
  );
}
