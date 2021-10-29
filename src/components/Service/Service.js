import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, description, price, img, _id } = service;
  return (
    <div className="col-12 col-sm-6 col-lg-3 service-card d-flex justify-content-center align-items-center">
      <div>
        <Link to={`/bookTour/${_id}`}>
          <div className="hover-img m-0">
            <img className="card-img" src={img} alt="" />
          </div>
          <h5 className="service-h5">{name}</h5>
          <p>{price}</p>
          <p>{description}</p>
        </Link>
        <p>
          <small>In </small>
        </p>
      </div>
    </div>
  );
};

export default Service;
