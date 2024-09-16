import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

export default function App() {
  return (
    <>
      <Header />
      <div className="container-fluid px-lg-5 px-4">
        <div className="row ps-lg-5 mx-lg-5 px-4">
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="about" element={<About />}></Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}
