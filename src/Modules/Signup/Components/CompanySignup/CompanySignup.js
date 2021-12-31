import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import arrowRight from "../../../../Resources/Assets/arrow-right.svg";
import one from "../../../../Resources/Assets/Group 6499.png";
import two from "../../../../Resources/Assets/Group 6498.png";

import "./CompanySignup.css";
function CompanySignup() {
  const sendData = (e) => {
    e.preventDefault();
    console.log("gi");
    localStorage.setItem("signupState", "CompanySignup");
  };
  return (
    <div className="CompanySignup">
      <Container>
        <div className="CompanySignupContainer">
          <Row className="h-100">
            <Col md={6} xs={12}>
              <div className="formContainer">
                <h4>Sign up !</h4>
                <p className="numImg">
                  <span >
                    <img src={one} alt="one"  className="mr-5"/>
                  </span>
                  <span>
                    <img src={two} alt="two" />
                  </span>
                </p>
                <p>Company info</p>
                <Form onSubmit={sendData}>
                  <Container fluid className="p-0">
                    <Row>
                      <Col md={12}>
                        <label>Company Name</label>
                        <input
                          type="text"
                          className="w-100 input"
                          id="Company Name"
                        />
                      </Col>
                      <Col md={12}>
                        <label>Selector</label>
                        <input
                          type="text"
                          className="w-100 input"
                          id="Selector"
                        />
                      </Col>
                      <Col md={12}>
                        <label>Email</label>
                        <input
                          type="email"
                          className="w-100 input"
                          id="email"
                        />
                      </Col>
                      <Col md={12}>
                        <label>Phone Number</label>
                        <input
                          type="number"
                          className="w-100 input"
                          id="Phone Number"
                        />
                      </Col>
                      <Col md={6}>
                        <label>Country</label>
                        <input
                          type="text"
                          className="w-100 input"
                          id="country"
                        />
                      </Col>
                      <Col md={6}>
                        <label>City</label>
                        <input type="text" className="w-100 input" id="city" />
                      </Col>
                      <Col md={12}>
                        <label>Address</label>
                        <input
                          type="text"
                          className="w-100 input mb-4"
                          id="Address"
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
