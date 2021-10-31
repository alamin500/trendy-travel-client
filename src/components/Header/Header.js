import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { user, logOut } = useFirebase();
  const [books, setBooks] = useState([]);
  const { username } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/myBooks/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [user.email]);
  return (
    <div>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="nav-body"
          variant="dark"
        >
          <Container>
            <Link className="nav-home" to="/">
              <strong>Trendy Travel</strong>
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto navbar-link">
                <Link to="/services">Our Packages</Link>

                {!user?.email && <Link to="/login"></Link>}

                {user?.email && (
                  <div>
                    <Link to="/mybook" className="position-relative my-book">
                      My booking{" "}
                      <p className="position-absolute">
                        {username ? username : books.length}
                      </p>
                    </Link>
                    <Link to="/allBooks">All Books</Link>
                    <Link to="/addServices">Add Package</Link>

                    <span className="displayname">{user.displayName}</span>
                    <button className="logout-btn" onClick={logOut}>
                      {" "}
                      Log Out
                    </button>
                  </div>
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
