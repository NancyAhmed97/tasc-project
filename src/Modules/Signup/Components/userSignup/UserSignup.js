import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import img from "../../../../Resources/Assets/Group 6026.png";
import "./UserSignup.css";
function UserSignup() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);

  const { currentLocal } = useSelector((state) => state.currentLocal);
  const sendData = (e) => {
    e.preventDefault();
    console.log("hi");
  };
  const handleChange = (e) => {
    const id = e.target.id;
    switch (id) {
      case "email": {
        setEmail(e.target.value);
        setAlert(false);
        break;
      }
      default:
        break;
    }
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
                      localStorage.removeItem("signupState");
                    }}
                  >
                    First
                  </span>
                  <span>last</span>
                </p>
                <form onSubmit={sendData} className="forgetPassForm">
                  <div className="form">
                    <div>
                      <div className="errorMsg">
                        {alert && !email && (
                          <div className="f-12">
                            *{currentLocal.login.emailIsRequired}
                          </div>
                        )}
                      </div>
                      <Row>
                        <Col md={12}>
                          <label>Name</label>
                          <input
                            type="text"
                            className="w-100  input"
                            id="userName"
                          />
                        </Col>
                        <Col md={12}>
                          <label>Surname</label>

                          <input
                            type="text"
                            className="w-100 input"
                            id="Surname"
                            onChange={handleChange}
                          />
                        </Col>
                        <Col md={12}>
                          <label>Job</label>

                          <input
                            type="text"
                            className="w-100 input"
                            id="userName"
                          />
                        </Col>
                        <Col md={12}>
                          <label>Email</label>

                          <input
                            type="email"
                            className="w-100 input"
                            id="userName"
                          />
                        </Col>
                        <Col md={12}>
                        <label>Phone Number</label>
                          <input
                            type="number"
                            className="w-100 input"
                            id="userName"
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="button">
                    <button type="submit" className="button-primary">
                      {currentLocal.login.send}
                    </button>
                  </div>
                </form>
              </div>
            </Col>
            <Col md={6} xs={12} className="img-container">
              <img src={img} alt="img" />
            </Col>
          </Row>
        </div>
      </Container>{" "}
    </div>
  );
}

export default UserSignup;
