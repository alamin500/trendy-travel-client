import React from "react";
import "./MoreTours.css";

const MoreTours = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className=" d-flex col-12 col-sm-6 col-lg-4">
          <img
            className="moretour-img"
            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/04/icon-around.png"
            alt=""
          />
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
          <img
            className="moretour-img"
            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/04/icon-boat.png"
            alt=""
          />
          <div className="link text-start">
            <h4 className="title-tour">World Tour</h4>
            <p>
              A concert tour is a series of concerts by an artist or group of
              artists in different cities, countries or locations. Often concert
              tours are named to
            </p>
            <a href="">Cruises</a>
          </div>
        </div>
        <div className=" d-flex col-12 col-sm-6 col-lg-4">
          <img
            className="moretour-img"
            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/04/icon-landmark.png"
            alt=""
          />
          <div className=" link text-start">
            <h4 className="title-tour">Best Tours</h4>
            <p>
              A concert tour is a series of concerts by an artist or group of
              artists in different cities, countries or locations. Often concert
              tours are named to
            </p>
            <a href="">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreTours;
