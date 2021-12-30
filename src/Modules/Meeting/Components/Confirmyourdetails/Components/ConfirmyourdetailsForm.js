import axios from "axios";
import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import "./ConfirmyourdetailsForm.css";
function ConfirmyourdetailsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [des, setdes] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [companySite, setCompanySite] = useState("");
  const [industry, setIndustry] = useState("");
  const [kind, setKind] = useState("");
  const [alert, setAlert] = useState(false);
  const getData = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "phoneNumber") {
      setPhoneNumber(e.target.value);
    } else if (e.target.id === "companyName") {
      setCompanyName(e.target.value);
    } else if (e.target.id === "website") {
      setWebsite(e.target.value);
    } else if (e.target.id === "Companywebsite") {
      setCompanySite(e.target.value);
    } else if (e.target.id === "Industry") {
      setIndustry(e.target.value);
    } else if (e.target.id === "des") {
      setdes(e.target.value);
    } else if (e.target.id === "Company") {
      setKind(e.target.value);
    } else if (e.target.id === "Customers") {
      setKind(e.target.value);
    } else if (e.target.id === "Other") {
      setKind(e.target.value);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber ||!email||!companyName||!website||!companySite||!industry||!des||!kind) {
      setAlert(true);
    } 
    else {
      axios({
        method: "post",
        url: "http://localhost:8000/api/v1/contact",
        data: {
          name: name,
          mobile: phoneNumber,
          email: email,
          companyName:companyName,
          website:website,
          companySite:companySite,
          industry:industry,
          des:des,
          Kind:kind
        },
      }).then((res) => {
        console.log(res);
      });
    }
  };
  return (
    <div className="ConfirmyourdetailsForm">
      <Container>
        <div className="title">
          <h2>Confirm your details</h2>
        </div>
        <div className="form">
          <form onSubmit={sendData}>
            <p>
              i want a meeting with tasc expert on
              <span>
                {" "}
                8 Dec 2021, {localStorage.getItem("bookingTime")}
                {localStorage.getItem("bookingTime") > "12.00" ? "PM" : "AM"}
              </span>
            </p>
            {alert && (
            <Alert variant={"danger"}>Please fill all fields</Alert>
          )}
            <Row>
              <Col md={6} xs={12}>
                <label>Name</label>
                <input
                  className="name w-100 input"
                  id="name"
                  type="text"
                  onChange={getData}
                />
              </Col>
              <Col md={6} xs={12}>
                <label>Email</label>

                <input
                  className="email w-100 input"
                  id="email"
                  type="email"
                  onChange={getData}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <label>Phone Number</label>
                <input
                  className="phone w-100 input"
                  id="phoneNumber"
                  type="number"
                  onChange={getData}
                />
              </Col>
              <Col md={6} xs={12}>
                <label>company Name</label>

                <input
                  className="companyName w-100 input"
                  id="companyName"
                  type="text"
                  onChange={getData}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <label>website</label>
                <input
                  className="website w-100 input"
                  id="website"
                  type="text"
                  onChange={getData}
                />
              </Col>
              <Col md={6} xs={12}>
                <label>Company website</label>

                <input
                  className="Companywebsite w-100 input"
                  id="Companywebsite"
                  type="text"
                  onChange={getData}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12}>
                <label> Your Industry</label>
                <textarea
                  className="Industry w-100 input"
                  id="Industry"
                  type="text"
                  onChange={getData}
                ></textarea>{" "}
              </Col>
            </Row>
            <Row>
              <Col md={12} xs={12}>
                <label> Describe Your Needs:</label>
                <textarea
                  className="des w-100 textarea"
                  id="des"
                  rows="4"
                  type="text"
                  onChange={getData}
                ></textarea>{" "}
              </Col>
            </Row>
            <Row>
              <p>
                Who Is It For ?
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="Company"
                      name="kind"
                      value="My Company"
                      onChange={getData}
                    />
                    My Company
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="Other"
                      name="kind"
                      value="Other"
                      onChange={getData}
                    />
                    Other
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="Customers"
                      name="kind"
                      onChange={getData}
                      value=" One of my Customers"
                    />
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
