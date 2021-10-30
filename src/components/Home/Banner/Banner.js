import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-image d-flex align-items-center justify-content-center">
      <div>
        <h1>LOVE & TRAVEL</h1>
        <p>
          TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER DON'T MISS THIS
          OPPORTUNITY FOR YOUR LIFE
        </p>
        <Link to="/services">
          <Button variant="outline-light">BOOK NOW</Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
