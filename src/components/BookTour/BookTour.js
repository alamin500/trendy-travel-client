import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./BookTour.css";

const BookTour = () => {
  const { tourId } = useParams();
  const { user } = useFirebase();
  const [services, setServices] = useState([]);
  console.log(user);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const value = services.filter((service) => service._id == tourId)[0];
  console.log(value);
  // const { description, name, img } = value;
  return (
    <div>
      <div className="d-flex container justify-content-center align-items-center">
        <div>
          <h1>Contract Information</h1>
          <h5>Name: {user.displayName}</h5>
          <h5>{user.email}</h5>
        </div>
        <div className="m-5">
          <h1>Product Information</h1>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <img src={value?.img} className="book-img" alt="" />
            </div>
            <div>
              <h4>{value?.name}</h4>
              <p>{value?.description}</p>
            </div>
          </div>
        </div>
      </div>
      {user?.email ? (
        <Link to="/confirmOrder">
          <button className="btn btn-warning">
            Appointment {value?.name.toLowerCase()}
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="btn btn-warning">
            Appointment {value?.name.toLowerCase()}
          </button>
        </Link>
      )}
    </div>
  );
};

export default BookTour;
