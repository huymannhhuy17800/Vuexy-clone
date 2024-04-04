import React from "react";
import "./styles.scss";
import { getImageUrl } from "../../utils";
import { Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { User } from "../DashBoard/User/User";
import { DashBoard } from "../../DashBoard";

const Login = () => {
  const handleClick = () => {
    <Link to="/user"></Link>;
  };
  return (
    <section className="login-page">
      <div className="login-section">
        <div className="login-img">
          <img src={getImageUrl("login-image.png")} alt="login-image" />
        </div>
        <div className="login-form">
          <img src={getImageUrl("vuexy-logo.png")} />
          <h1>Welcome to Vuexy! 👋</h1>
          <p id="description">
            Please sign in to your account and start new adventure
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email or Username</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
              <Form.Control type="password" placeholder="****************" />
              <div className="check-box">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>

              <Button variant="primary" onClick={handleClick}>
                Sign in
              </Button>
              <Routes>
                <Route path="/user" element={<User />}></Route>
              </Routes>
            </Form.Group>
          </Form>
          <div className="create-account">
            <p>New on our platform?</p>
            <a href="#">Create an account</a>
          </div>
          <p className="or-line">
            <span>or</span>
          </p>
          <div className="login-methods">
            <img
              src={getImageUrl("facebook.svg")}
              alt="fackbook-icon"
              id="fa"
            />
            <img src={getImageUrl("x.svg")} alt="fackbook-icon" id="x" />
            <img src={getImageUrl("google.svg")} alt="fackbook-icon" id="gg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
