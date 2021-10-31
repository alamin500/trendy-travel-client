import React from "react";
import "./MoreTours.css";
import one from "../../../images/1.png";
import two from "../../../images/2.png";
import three from "../../../images/icon-landmark.png";

const MoreTours = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className=" d-flex col-12 col-sm-6 col-lg-4">
          <img className="moretour-img" src={one} alt="" />
          <div className="link text-start">
            <h4 className="title-tour">World Tour</h4>
            <p>
              A concert tour is a series of concerts by an artist or group of
              artists in different cities, countries or locations. Often concert
              tours are named to
            </p>
            <a href="">View More</a>
          </div>
        </div>
        <div className=" d-flex col-12 col-sm-6 col-lg-4">
          <img className="moretour-img" src={two} alt="" />
          <div className="link text-start">
            <h4 className="title-tour">Cruises</h4>
            <p>
              Princess gives you the chance to be in awe of the world again.
              Take a cruise vacation to the Caribbean, Alaska, Europe & many
              more destinations.
            </p>
            <a href="">View More</a>
          </div>
        </div>
        <div className=" d-flex col-12 col-sm-6 col-lg-4">
          <img className="moretour-img" src={three} alt="" />
          <div className=" link text-start">
            <h4 className="title-tour">Best Tours</h4>
            <p>
              Often concert tours are named to. A concert tour is a series of
              concerts by an artist or group of artists in different cities,
              countries or locations.
            </p>
            <a href="">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreTours;
