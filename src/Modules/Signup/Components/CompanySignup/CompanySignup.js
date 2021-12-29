import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import arrowRight from "../../../../Resources/Assets/arrow-right.svg";

import "./CompanySignup.css";
function CompanySignup() {
  const sendData = (e) => {
    e.preventDefault();
    console.log("gi");
    localStorage.setItem("signupState","CompanySignup")
  };
  return (
    <div className="CompanySignup">
      <Container>
        <div className="CompanySignupContainer">
          <Row className="h-100">
            <Col md={6} xs={12}>
              <div className="formContainer">
                <h4>Sign up !</h4>
                <p>
                <span className="mx-5">First</span>
                <span>last</span>
                </p>
                <Form onSubmit={sendData}>
                  <Container fluid className="p-0">
                    <Row>
                      <Col md={12}>
                        <input
                          type="text"
                          placeholder="Company Name"
                          className="w-100 mb-4"
                          id="userName"
                        />
                      </Col>
                      <Col md={12}>
                        <input
                          type="text"
                          placeholder="Selector"
                          className="w-100 mb-4"
                          id="userName"
                        />
                      </Col>
                      <Col md={12}>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-100 mb-4"
                          id="userName"
                        />
                      </Col>
                      <Col md={12}>
                        <input
                          type="number"
                          placeholder="Phone Number"
                          className="w-100 mb-4"
                          id="userName"
                        />
                      </Col>
                      <Col md={6}>
                        <input
                          type="text"
                          placeholder="Country"
                          className="w-100 mb-4"
                          id="userName"
                        />
                      </Col>
                      <Col md={6}>
                        <input
                          type="text"
                          placeholder="City"
                          className="w-100 mb-4"
                          id="userName"
                        />
                      </Col>
                      <Col md={12}>
                        <input
                          type="text"
                          placeholder="Address"
                          className="w-100 mb-4"
                          id="userName"
                        />
                      </Col>
                    </Row>
                  </Container>
                  <Row>
                    <div className="button">
                        <button type="submit">
                          Next
                          <img src={arrowRight} alt="arrowRight" />
                        </button>
                    </div>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col md={6} xs={12} className="img-container"></Col>
          </Row>
        </div>
      </Container>{" "}
    </div>
  );
}

export default CompanySignup;
