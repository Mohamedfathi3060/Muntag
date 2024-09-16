import React from "react";
import styles from "./cartstyle.module.css";
import Path from "../../Components/path/Path";
import img1 from "../../imgs/Monitor-Cart-Small.png";
import Button from "../../Components/Button/Button";
import ProductCard from "../../Components/ProductCart/ProductCart";

export default function Cart() {
  return (
    <div className="container-fluid my-5 px-lg-5 px-4">
      <Path current={"Cart"} previus={["Home"]}></Path>
      <div className="px-2">
        <div className={`${styles.row} row my-5`}>
          <div className="col-3">Product</div>
          <div className="col-3 text-center">Price</div>
          <div className="col-3 text-center">Quantity</div>
          <div className="col-3 text-end">Subtotal</div>
        </div>
      </div>
      <div className="px-2">
        <ProductCard img={img1} title={"LCD Monitor"} price={650} />
      </div>
      <div>
        <div className="row my-5">
          <div className="col-2">
            <Button
              message={"Return To Shop"}
              bg="#fff"
              color="#000"
              border="1px solid rgba(0,0,0,0.5)"
              height={"50px"}
              className={"col-12 h6"}
            />
          </div>
          <div className="col-2 ms-auto">
            <Button
              message={"Update Cart"}
              bg="#fff"
              color="#000"
              border="1px solid rgba(0,0,0,0.5)"
              height={"50px"}
              className={"col-12 h6"}
            />
          </div>
        </div>
      </div>
      <div className="pe-2">
        <div className="row my-5">
          <div className="coupon col-5">
            <input
              type="text"
              placeholder="Coupon Code"
              className={`${styles.couponInput} col-6 me-3`}
            />
            <Button
              message={"Apply Coupon"}
              height={"45px"}
              className={"col-5"}
            />
          </div>
          <div className={`${styles.info} ms-auto col-4`}>
            <h5 className="mb-4">Cart total</h5>
            <div className="d-flex">
              <div>Subtotal:</div> <span className="ms-auto">$1750</span>
            </div>
            <hr />
            <div className="d-flex">
              <div>Shipping:</div>
              <span className="ms-auto">Free</span>
            </div>
            <hr />
            <div className="my-3 d-flex">
              <div> Total:</div>
              <span className="ms-auto">$650</span>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                message={"Procees to checkout"}
                className={"col-12"}
                height={"50px"}
                classNameforLink={"col-8"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
