import React from "react";
import {} from "./style.modules.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Path from "../../Components/path/Path";
export default function NotFound() {
  return (
    <div className="container my-5">
      <Path current={"404 Error"} previus={["Home"]}></Path>

      <div className="notfound row text-center align-items-center py-5">
        <h1 className="text-uppercase text-black">404 Not Found</h1>
        <p className="text-black mt-3 mb-5">
          Your visited page not found. You may go home page.
        </p>
        <div className="col-2 mx-auto">
          <Button
            message={"Back to home page"}
            className={"w-100 py-3"}
          ></Button>
        </div>
      </div>
    </div>
  );
}
