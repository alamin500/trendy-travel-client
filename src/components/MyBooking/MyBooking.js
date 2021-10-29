import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFirebase from "../../hooks/useFirebase";

const MyBooking = () => {
  const { user } = useFirebase();
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    fetch(`http://localhost:5000/myBooks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [user.email]);
  return (
    <div>
      <h1>My books : {books.length}</h1>
      {books.map((book) => (
        <div className="row ">
          <div className="col-12 col-sm-6 col-lg-3 service-card d-flex justify-content-center align-items-center">
            <div>
              <img src={book.img} alt="" />
              <h1>{book.name}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBooking;
