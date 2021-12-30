import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ConfirmyourdetailsForm.css";
function ConfirmyourdetailsForm() {
  return (
    <div className="ConfirmyourdetailsForm">
      <Container>
        <div className="title">
          <h2>Confirm your details</h2>
        </div>
        <div className="form">
          <form>
            <p>
              i want a meeting with tasc expert on
              <span> 8 Dec 2021, {localStorage.getItem("bookingTime")}
              {localStorage.getItem("bookingTime")>"12.00"?"PM":"AM"}
              </span>
            </p>
            <Row>
              <Col md={6} xs={12}>
                <input />
              </Col>
              <Col md={6} xs={12}>
                <input />
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <input />
              </Col>
              <Col md={6} xs={12}>
                <input />
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <input />
              </Col>
              <Col md={6} xs={12}>
                <input />
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <input />
              </Col>
              <Col md={6} xs={12}>
                <input />
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12}>
                <textarea></textarea>
              </Col>
            </Row>
            <Row>
              <p>
                Who Is It For ?
                <ul>
                  <li>
                    <input type="radio" />
                    My Company
                  </li>
                  <li>
                    <input type="radio" />
                    Other
                  </li>
                  <li>
                    <input type="radio" />
                    One of my Customers
                  </li>
                </ul>
              </p>
            </Row>
            <Row>
              <div className="button text-center">
                <button type="submit">Confirm Appointment</button>
              </div>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default ConfirmyourdetailsForm;
