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
      {books.map((book) => (
        <div className="row ">
          <div className="col-12 col-sm-6 col-lg-3 service-card d-flex justify-content-center align-items-center">
            <div>
              <img src={book.img} alt="" />
              <h1>{book.name}</h1>
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
      ))}
    </div>
  );
};

export default ManageAllBooks;
