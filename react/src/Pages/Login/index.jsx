import React from "react";
import { Link } from "react-router-dom";
import {} from "./loginstyle.modules.css";
export default function Login() {
  return (
    <main>
      <div className="login-container d-flex align-items-lg-center">
        <section className="col-7 img-container">
          <img src="./imgs/Signup.jpeg" alt="" className="w-100" />
        </section>
        <section className="col-3">
          <h2>Log in to Muntag</h2>
          <p className="mb-5 mt-2 ">Enter your details below</p>
          <form action="" className="d-flex flex-column col-6 w-100">
            <div className="email-input">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-100"
                id="emailInput"
              />
              <p className="not-visible initalemail">Email or Phone Number*</p>
            </div>
            <div className="password-input">
              <input
                type="password"
                placeholder="Password"
                className="w-100"
                id="passwordInput"
              />
              <p className="not-visible initalpassword">Password*</p>
            </div>
            <div className="buttons d-flex justify-content-between align-items-center">
              <button type="submit" id="login">
                Log in
              </button>
              <Link>Forget Password?</Link>
            </div>
          </form>
          <p className="text-center mt-5 signup">
            Don't have account yet?{" "}
            <Link to="/signup" className="ms-2">
              Signup
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
