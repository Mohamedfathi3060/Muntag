import React from "react";
import Input from "../../Components/Input/Input";
import Path from "../../Components/path/Path";
import Button from "../../Components/Button/Button";
import call from "../../imgs/icons-phone.png";
import email from "../../imgs/icons-mail.png";

import styles from "./contact.module.css";
export default function Contact() {
  return (
    <div className="container-fluid my-5 px-lg-5 px-4">
      <Path previus={["Home"]} current={"Contact"} />
      <div className="my-5 d-flex">
        <div className="col-4 me-auto">
          <div className={`${styles.info} `}>
            <div className="call">
              <div className="header d-flex align-items-center">
                <img src={call} alt="" />
                <h6 className="ms-3">Call To Us</h6>
              </div>
              <p className="my-4">We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <hr className="my-4" />
            <div className="email">
              <div className="header d-flex align-items-center">
                <img src={email} alt="" />
                <h6 className="ms-3">Write To US</h6>
              </div>
              <p className="my-4">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.form} d-flex justify-content-between flex-wrap col-7`}
        >
          <div className="col-12 d-flex">
            <div className="col-4 pe-2">
              <Input
                type={"Name"}
                placeholder="Your Name *"
                className={"col-12"}
              ></Input>
            </div>
            <div className="col-4 pe-2">
              <Input
                type={"email"}
                placeholder="Your Email *"
                className={"col-12"}
              ></Input>
            </div>
            <div className="col-4 ">
              <Input
                type={"tel"}
                placeholder="Your Phone *"
                className={"col-12"}
              ></Input>
            </div>
          </div>
          <div className="col-12 my-4">
            <Input
              type={"text"}
              placeholder="Your Message"
              height={"250px"}
              className={"w-100"}
            ></Input>
          </div>
          <div className="col-4 ms-auto">
            <Button
              message={"send message"}
              className={"col-12"}
              height={"45px"}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
