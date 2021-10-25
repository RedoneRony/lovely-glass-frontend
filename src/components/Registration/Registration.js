import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";
function Register() {
  // register page design
  const { getName, getPhoto, signup, getEmail, getPassword, error } = useAuth();
  return (
    <div className="text-center text-white registration">
      <h2 className="text-warning">Please Sign Up </h2>
      <p className="mt-2">Sign Up with Name, Email, Password & photo</p>
      <p className="text-danger text-center">{error}</p>
      <div className="w-25 mx-auto">
        <Form onSubmit={signup}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Name
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  required
                  type="text"
                  placeholder="Enter your name"
                  onBlur={getName}
                  id="name"
                  autoComplete="current-name"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  required
                  type="email"
                  placeholder="Enter email"
                  onBlur={getEmail}
                  id="email"
                  autoComplete="current-email"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  required
                  type="password"
                  placeholder="Enter Password"
                  onBlur={getPassword}
                  id="password"
                  autoComplete="current-password"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="name" visuallyHidden>
                Your Profile Photo Url
              </Form.Label>
              <InputGroup className="mb-2">
                <FormControl
                  type="text"
                  placeholder="Enter valid photo url"
                  onBlur={getPhoto}
                  id="photo"
                  autoComplete="current-text"
                />
              </InputGroup>
            </Col>
          </Row>

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Sign Up
          </button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none" to="/login">
          Already have account ? Please Login!
        </NavLink>
      </p>
    </div>
  );
}
export default Register;
