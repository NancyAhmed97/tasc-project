import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import one from "../../../../Resources/Assets/Group 6499.png";
import two from "../../../../Resources/Assets/Group 6498.png";
import img from "../../../../Resources/Assets/Group 6026.png";
import "./CompanySignup.css";
import { useSelector } from "react-redux";
function CompanySignup() {const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);

  const { currentLocal } = useSelector((state) => state.currentLocal);

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
            <Col md={6} xs={12} className="CompanySignupCol">
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
                            onChange={handleChange}

                          />
                        </Col>
                        <Col md={12}>
                          <label>Surname</label>

                          <input
                            type="text"
                            className="w-100 input"
                            id="Surname"
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
              <img src={img} alt="img" className="w-100"/>
            </Col>
          </Row>
        </div>
      </Container>{" "}
    </div>
  );
}

export default CompanySignup;
