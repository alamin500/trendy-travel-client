import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
// import useFirebase from "../../hooks/useFirebase";

const ManageAllBooks = () => {
  // const { user } = useFirebase();
  const [books, setBooks] = useState([]);
  const [control, setConrol] = useState(false);
  const [admin, setAdmin] = useState(false);
  console.log(books);
  useEffect(() => {
    fetch(`http://localhost:5000/allBooks`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [control]);

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
    <div>
      {/* < Form.Check label="Remember me" /> */}
      <input
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        value="Bike"
        onClick={() => setAdmin(!admin)}
      />
      <label for="vehicle1">Admin</label>
      <br />

      <h1>Manage All Orders</h1>

      <div className="container mt-5">
        {books.map((book, index) => (
          <div className="row align-items-center mx-5">
            <div className="col-1">
              <h3>{index + 1}</h3>
            </div>
            <div className="booking-border col-12 col-sm-6 col-lg-11 d-flex justify-content-center align-items-center m-0 mb-2">
              <div
                style={{ border: "1 px solid #f1f1f1" }}
                className="d-flex mybook-img justify-content-center align-items-center"
              >
                <img src={book.img} alt="" />
                <h5>{book.name}</h5>
                <p>{book.description}</p>
                <div style={{ width: "120px" }}>
                  {admin && (
                    <button
                      className="btn btn-danger "
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllBooks;
