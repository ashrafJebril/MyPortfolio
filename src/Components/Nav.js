import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" nav ">
      <div className="row">
        <div className="col-lg-5 ">
          <h2>Ashraf Jebril</h2>
        </div>
      </div>
      <div className="row des">
        <div className="col-lg-5">
          <p>Full Stack Software Engineer</p>
        </div>
        <div className="col-lg-7">
          <ul>
            <li>
              <Link
                to={{
                  pathname: "/"
                }}
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to={{ pathname: "/Projects" }}>Projects </Link>
            </li>
            <li>
              {" "}
              <Link
                to={{
                  pathname: "/Intereists"
                }}
              >
                Intereists{" "}
              </Link>
            </li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Nav;
