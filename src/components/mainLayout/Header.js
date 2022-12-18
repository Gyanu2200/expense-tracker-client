import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const userStr = sessionStorage.getItem("user");
    if (userStr) {
      const userObj = JSON.parse(userStr);
      setUser(userObj);
    }
    console.log(userStr);
  });

  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
  };
  return (
    <Navbar bg="secondary" expand="md">
      <Container>
        <Navbar.Brand href="#home">Expenses Tracker</Navbar.Brand>
        Welcome {user.name}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link to="/" className="nav-link">
                  Dashboard{" "}
                  <i class="fa-solid fa-right-to-bracket text-primary"></i>
                </Link>
                <Link to="/register" className="nav-link">
                  Logout <i class="fa-solid fa-user-pen text-warning"></i>
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  Login{" "}
                  <i class="fa-solid fa-right-to-bracket text-primary"></i>
                </Link>
                <Link to="/register" className="nav-link">
                  Register <i class="fa-solid fa-user-pen text-warning"></i>
                </Link>
              </>
            )}

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
