import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import { Form, FormControl, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Login.css";
function Login() {
  const {
    signInUsingGoogle,
    signInWithEmail,
    setUser,
    setError,
    getEmail,
    getPassword,
    error,
  } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/";
  return (
    <div className="login">
      <Container>
        <h2 className="text-warning text-center">Login </h2>
        <p className="mt-2">Login with registered Email & Password</p>
        <p className="text-danger text-center">{error}</p>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            signInWithEmail()
              .then((result) => {
                setUser(result.user);
                history.push(redirect);
              })
              .catch((err) => {
                setError(err.message);
              });
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>

            <FormControl
              type="email"
              placeholder="Enter email"
              onBlur={getEmail}
              id="email"
              autoComplete="current-email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>

            <FormControl
              type="password"
              placeholder="Enter Password"
              onBlur={getPassword}
              id="password"
              autoComplete="current-password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            LogIn
          </Button>
        </Form>

        <p className="mt-2">
          <NavLink className="text-decoration-none" to="/register">
            Need an Account ? Please Sign Up !
          </NavLink>
        </p>
      </Container>

      <br />
      <Container>
        <Button
          onClick={() => {
            signInUsingGoogle()
              .then((result) => {
                setUser(result.user);
                history.push(redirect);
              })
              .catch((err) => {
                setError(err.message);
              });
          }}
          className=""
          variant="warning"
        >
          Google Sign In
        </Button>
      </Container>
    </div>
  );
}
export default Login;
