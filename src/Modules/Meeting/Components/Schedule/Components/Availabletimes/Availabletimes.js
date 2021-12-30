import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "./Availabletimes.css";
function Availabletimes() {
  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [value, setValue] = useState("");
  const chooseTime = (e) => {
    setValue(e.target.id);
  };
  if (redirect) {
    history.push("/Confirmyourdetails");
  }
  return (
    <>
      <div className="Availabletimes">
        <p>
          Available times on <span> 8, December 2021</span>{" "}
        </p>
        <div className="AvailabletimesConatiner">
          <Container fluid className="p-0">
            {alert && (
              <Alert variant={"danger"}>Please choose your avalible time</Alert>
            )}
            <Row>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "10.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="10.00"
                >
                  10.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "11.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="11.00"
                >
                  11.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "12.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="12.00"
                >
                  12.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "13.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="13.00"
                >
                  13.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "14.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="14.00"
                >
                  14.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "15.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="15.00"
                >
                  15.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "16.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="16.00"
                >
                  16.00
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div
                  className={
                    value === "17.00"
                      ? "clickable timeContainer"
                      : "timeContainer"
                  }
                  onClick={chooseTime}
                  id="17.00"
                >
                  17.00
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="availableButton">
        <button
          onClick={() => {
            if (value) {
              setRedirect(true);
            } else {
              setAlert(true);
            }
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
}

export default Availabletimes;
