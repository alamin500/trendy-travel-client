import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();
  const [books, setBooks] = useState([]);
  console.log(user.displayName);
  useEffect(() => {
    fetch(`http://localhost:5000/myBooks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [user.email]);
  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link to="/">Home</Link>

            <Link to="/services">Services</Link>
            <Link to="/addServices">Add Services</Link>
            <Link to="/mybook" className="position-relative my-book">
              My booking <p className="position-absolute">{books.length}</p>
            </Link>
            <Link to="/allBooks">All Books</Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                {!user?.email && <Link to="/login">Login</Link>}
                <span className="displayname">{user.displayName}</span>
                {user?.email && (
                  <button className="logout-btn" onClick={logOut}>
                    {" "}
                    Log Out
                  </button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
