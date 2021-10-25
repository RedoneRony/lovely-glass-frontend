import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
function Header() {
  const { user, logout } = useAuth();
  console.log(user.displayName);
  return (
    // home page design
    <div className="header w-100">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand">
              <FontAwesomeIcon icon={faNotesMedical} />
              Doctors Hub
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contactus">Appointment</NavLink>
              <NavLink to="/about">Doctors secrect </NavLink>
              {user?.email ? (
                <Button onClick={logout} variant="light">
                  Logout
                </Button>
              ) : (
                <Nav>
                  <Nav.Item className="nav-itemlist">
                    <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/register">
                      Register
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              )}

              <Navbar.Text>
                <a href="#login">{user?.displayName}</a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
