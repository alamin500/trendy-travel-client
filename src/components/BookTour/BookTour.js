import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./BookTour.css";
import useAuth from "../../hooks/useAuth";
const BookTour = () => {
  const { tourId } = useParams();
  const { user } = useFirebase();
  const [services, setServices] = useState([]);
  const [success, setSuccess] = useState(null);
  const [books, setBooks] = useState([]);
  const { setUsername } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const value = services.filter((service) => service._id === tourId)[0];
  const myBook = (data) => {
    data.email = user?.email;
    data._id = `${Math.random()}`;
    console.log("data", data);
    setSuccess(true);
    setUsername(books.length + 1);
    fetch("http://localhost:5000/myBook", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setSuccess(result));
  };
  useEffect(() => {
    fetch(`http://localhost:5000/myBooks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [user.email, success]);

  console.log("value", books);
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
      {/* <Link to="/confirmOrder" className="btn btn-warning"> */}
      {success ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              background: "",
            }}
          >
            Confirmed
          </h4>{" "}
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              background: "green",
              color: "#fff",
            }}
          >
            {" "}
            ✓
          </h3>
        </div>
      ) : (
        <button onClick={() => myBook(value)}>
          {" "}
          Place Order {value?.name.toLowerCase()}
        </button>
      )}

      {/* </Link> */}
    </div>
  );
};

export default BookTour;
