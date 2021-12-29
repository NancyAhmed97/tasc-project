import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./UserSignup.css";
function UserSignup() {
  const sendData = (e) => {
    e.preventDefault();
    console.log("gi");
  };
  return (
    <div className="UserSignup">
      <Container>
        <div className="UserSignupContainer">
          <Row className="h-100">
            <Col md={6} xs={12}>
              <div className="formContainer">
                <h4>Sign up !</h4>
                <p>
                  <span
                    className="mx-5"
                    onClick={() => {
                      localStorage.removeItem(
                        "signupState"
                      );
                    }}
                  >
                    First
                  </span>
                  <span>last</span>
                </p>
                <Form onSubmit={sendData}>
                  <Container fluid className="p-0">
                    <Row>
                      <Col md={12}>
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-100 mb-4"
                          id="userName"
                        />
                      </Col>
                      <Col md={12}>
                        <input
                          type="text"
                          placeholder="Surname"
                          className="w-100 mb-4"
                          id="userName"
                        />
                      </Col>
                      <Col md={12}>
                        <input
                          type="text"
                          placeholder="Job"
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
                    </Row>
                  </Container>
                  <Row>
                    <div className="button">
                      <button type="submit">Finish </button>
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

export default UserSignup;
