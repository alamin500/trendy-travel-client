import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import useFirebase from "../../hooks/useFirebase";
import "./BookTour.css";
import useAuth from "../../hooks/useAuth";
import { Button } from "react-bootstrap";
const BookTour = () => {
  const { tourId } = useParams();
  const { user } = useFirebase();
  const [services, setServices] = useState([]);
  const [success, setSuccess] = useState(null);
  const [books, setBooks] = useState([]);
  const { setUsername } = useAuth();
  useEffect(() => {
    fetch("https://secure-anchorage-89979.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [success]);
  const value = services.filter((service) => service._id === tourId)[0];
  const myBook = (data) => {
    data.email = user?.email;
    data._id = `${Math.random()}`;
    setSuccess(true);
    setUsername(books.length + 1);
    fetch("https://secure-anchorage-89979.herokuapp.com/myBook", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setSuccess(result));
  };
  useEffect(() => {
    fetch(`https://secure-anchorage-89979.herokuapp.com/myBooks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [user.email, success]);
  return (
    <div>
      <div className="d-flex container justify-content-center align-items-center">
        <div>
          <h1>Contract Information</h1>
          <h5>Name: {user.displayName}</h5>
          <h5>{user.email}</h5>
        </div>
        <div className="m-5 w-50">
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
            ???
          </h3>
        </div>
      ) : (
        <Button className="btn btn-success" onClick={() => myBook(value)}>
          {" "}
          Place Order {value?.name.toLowerCase()}
        </Button>
      )}
    </div>
  );
};

export default BookTour;
