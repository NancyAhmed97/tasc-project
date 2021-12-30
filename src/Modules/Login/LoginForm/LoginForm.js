import axios from "axios";
import React, { useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import passSeen from "../../../Resources/Assets/Group 6489.svg";
import "./LoginForm.css";
function LoginForm() {
  const [passSeenState, setPassSeenState] = useState("password");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [rememberMe, setRememberMe] = useState("");
  const [alert, setAlert] = useState(false);
  const changePassSeen = () => {
    if (passSeenState === "password") {
      setPassSeenState("text");
    } else if (passSeenState === "text") {
      setPassSeenState("password");
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (!userName || !pass) {
      setAlert(true);
    } else {
      axios({
        method: "post",
        url: "http://localhost:8000/api/v1/contact",
        data: {
          userName: userName,
          password: pass,
          rememberMe:rememberMe
        },
      }).then((res) => {
        console.log(res);
      });
    }
  };
  const getData = (e) => {
    if (e.target.id === "userName") {
      setUserName(e.target.value);
    } else if (e.target.id === "password") {
      setPass(e.target.value);
    }else if(e.target.id==="Remember"){
      setRememberMe(e.target.value)
    }
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
                {alert && (
                  <Alert variant={"danger"}>Please fill all fields</Alert>
                )}
                <Form onSubmit={sendData}>
                  <label>User Name</label>
                  <input
                    type="text "
                    className="w-100  input"
                    id="userName"
                    onChange={getData}
                  />
                  <label>password</label>

                  <input
                    type={passSeenState}
                    className="w-100 mb-3 input"
                    id="password"
                    onChange={getData}
                  />
                  <img
                    src={passSeen}
                    alt="passSeen"
                    className="passSeen"
                    onClick={changePassSeen}
                  />
                  <Row className=" checkbox">
                    <Col md={6} xd={6}>
                      <input
                        type="checkbox"
                        id="Remember"
                        name="Remember"
                        value="Remember"
                        onChange={getData}

                      />
                      <label for="Remember" className="Remember">
                        Remember me
                      </label>
                    </Col>
                    <Col md={6} xd={6} className="forgetPass">
                      <Link to="/forgotPassword">Forgot Password?</Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} xs={6}></Col>
                    <Col md={6} xs={6} className="forgetPass pb-4">
                    <Link to="/signup">Register Now</Link>

                    </Col>
                  </Row>
                  <Row>
                    <div className="button">
                      <button type="submit">Login now</button>
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
