import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Service.css";

const Service = ({ service }) => {
  const { user } = useFirebase();
  const { name, description, price, img, _id } = service;
  return (
    <div className="col-12 col-sm-6 col-lg-4  d-flex justify-content-center align-items-center px-3">
      <div className="service-card shadow-sm w-100">
        <div className="hover-img m-0">
          <img className="card-img" src={img} alt="" />
        </div>
        <div className="p-4">
          <h5 className="service-h5">{name}</h5>
          <hr />
          <h3 className="price-h3">{price} $</h3>
          <hr />
          <p className="describe">{description}</p>

          {user?.email ? (
            <Link to={`/bookTour/${_id}`}>
              <button className="btn m-2 btn-danger">
                Book {name.toLowerCase()}
              </button>
            </Link>
          ) : (
            <Link to={`/login/${_id}`}>
              <button className="btn m-2 btn-danger">
                BOOK {name.toLowerCase()}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
