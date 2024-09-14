import React from "react";

export default function FeaturesSection() {
  return (
    <section>
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center text-center">
            <img src="./imgs/Services.png" alt="Delivery Service" />
            <h4 className="fw-bold my-2">FREE AND FAST DELIVERY</h4>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center text-center">
            <img src="./imgs/Services2.png" alt="Delivery Service" />
            <h4 className="fw-bold my-2">24/7 CUSTOMER SERVICE</h4>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center text-center">
            <img src="./imgs/Services3.png" alt="Delivery Service" />
            <h4 className="fw-bold my-2">MONEY BACK GUARANTEE</h4>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
