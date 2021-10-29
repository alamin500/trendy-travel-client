import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      <h1>This is Header</h1>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link to="/">Home</Link>

            <Link to="/services">Services</Link>
            <Link to="/addServices">Add Services</Link>
            <Link to="/mybook">My booking</Link>
            {!user?.email && <Link to="/login">Login</Link>}
            <span className="displayname">{user.displayName}</span>
            {user?.email && (
              <button className="logout-btn" onClick={logOut}>
                {" "}
                Log Out
              </button>
            )}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
