import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
function Header() {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    // home page design
    <div className="header w-100">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand">
              <FontAwesomeIcon icon={faGlasses} />
              Lovely Glass
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto float-right nav">
              <NavLink to="/" className="navLink">
                Home
              </NavLink>
              <NavLink to="/myorder" className="navLink">
                My Order
              </NavLink>
              <NavLink to="/manageallorder" className="navLink">
                Manage all Order
              </NavLink>
              <NavLink to="/services" className="navLink">
                More Sunglasses
              </NavLink>
              <NavLink to="/addservice" className="navLink">
                Add a New Tour Plan
              </NavLink>
              {user?.providerData ? (
                <Button onClick={logout} variant="light">
                  Logout
                </Button>
              ) : (
                <Nav>
                  <Nav.Item className="nav-itemlist">
                    <Nav.Link as={Link} to="/login" className="navLink">
                      Login
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/register" className="navLink">
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
