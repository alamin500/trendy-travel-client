import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Service.css";

const Service = ({ service }) => {
  const { user } = useFirebase();
  const { name, description, price, img, _id } = service;
  return (
    <div className="col-12 col-sm-6 col-lg-3 service-card d-flex justify-content-center align-items-center">
      <div>
        <div className="hover-img m-0">
          <img className="card-img" src={img} alt="" />
        </div>
        <h5 className="service-h5">{name}</h5>
        <p>{price}</p>
        <p>{description}</p>

        {user?.email ? (
          <Link to={`/bookTour/${_id}`}>
            <button className="btn btn-warning">
              Book {name.toLowerCase()}
            </button>
          </Link>
        ) : (
          <Link to={`/login/${_id}`}>
            <button className="btn btn-warning">
              Book {name.toLowerCase()}
            </button>
          </Link>
        )}
        <p>
          <small>In </small>
        </p>
      </div>
    </div>
  );
};

export default Service;
