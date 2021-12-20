import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import passSeen from "../../../Resources/Assets/Group 6489.svg"
import "./LoginForm.css";
function LoginForm() {
  const sendData = (e) => {
    e.preventDefault()
    console.log("gi");
  };
  return (
    <div className="login">
      <Container>
        <div className="LoginContainer">
          <Row className="h-100">
            <Col md={6} xs={12}>
              <div className="formContainer">
                <h4>Sign in Now!</h4>
                <p>
                  Log in to your account so you can continue using our customer
                  experience.
                </p>
                <Form onSubmit={sendData}>
                  <input type="text" placeholder="Username" className="w-100 mb-4" id="userName"/>
                  <input type="password" placeholder="Password" className="w-100 mb-3" id="password"/>
                  <img src={passSeen} alt="passSeen" className="passSeen" />
                  <Row className="pb-5">
                    <Col md={6} xd={6}>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> Remember me</label>
                    </Col>
                    <Col md={6} xd={6} className="forgetPass">
                      <Link to="/forgotPassword" >Forgot Password?</Link>
                    </Col>
                  </Row>
                  <Row>
                      <div className="button">
                          <button type="submit">
                          Login now
                          </button>
                      </div>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col md={6} xs={12} className="img-container"></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default LoginForm;
