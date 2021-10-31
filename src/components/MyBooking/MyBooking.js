import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFirebase from "../../hooks/useFirebase";
import "./MyBooking.css";

const MyBooking = () => {
  const { user } = useFirebase();
  const [books, setBooks] = useState([]);
  const [control, setConrol] = useState(false);
  console.log(books);

  useEffect(() => {
    fetch(`http://localhost:5000/myBooks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [user.email, control]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteBook/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
    console.log(id);
  };
  return (
    <div className="container mt-5">
      <h1>My books : {books.length}</h1>
      {books.map((book, index) => (
        <div className="row booking-border mx-5">
          <div className="col-12 col-sm-6 col-lg-11 d-flex justify-content-center align-items-center">
            <div
              style={{ border: "1 px solid #f1f1f1" }}
              className="d-flex mybook-img justify-content-center align-items-center"
            >
              <div className="col-1">
                <h3>{index + 1}</h3>
              </div>
              <img src={book.img} alt="" />
              <h5>{book.name}</h5>
              <p>{book.description}</p>
              <button
                className="btn btn-danger "
                onClick={() => handleDelete(book._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBooking;
