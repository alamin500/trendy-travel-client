import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFirebase from "../../hooks/useFirebase";

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
    <div>
      <h1>My books : {books.length}</h1>
      {books.map((book) => (
        <div className="row ">
          <div className="col-12 col-sm-6 col-lg-3 service-card d-flex justify-content-center align-items-center">
            <div>
              <img src={book.img} alt="" />
              <h1>{book.name}</h1>
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
