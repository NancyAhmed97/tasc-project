import axios from "axios";
import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import "./GetInTouchForm.css";
function GetInTouchForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");
  const [alert, setAlert] = useState(false);
  const getData = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "phone") {
      setPhoneNumber(e.target.value);
    } else {
      setMsg(e.target.value);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber || !msg||!email) {
      setAlert(true);
    } else {
      axios({
        method: "post",
        url: "http://localhost:8000/api/v1/contact",
        data: {
          name: name,
          mobile: phoneNumber,
          message: msg,
          email: email,
        },
      }).then((res) => {
        console.log(res);
      });
    }
  };
  return (
    <div className="GetInTouchForm">
      <form onSubmit={sendData}>
        <p>
          We’re glad to discuss your organisation’s situation. So please contact
          us via the details below, or enter your request.
        </p>
        <p >
          {alert && (
            <Alert variant={"danger"}>Please choose your avalible time</Alert>
          )}
        </p>
        <label>Name</label>
        <input
          className="name w-100 input"
          id="name"
          type="text"
          onChange={getData}
        />
        <label>E-mail</label>
        <input
          className="email w-100 input"
          id="email"
          type="email"
          onChange={getData}
        />
        <label>Phone Number</label>
        <input
          className="phone w-100 input"
          id="phone"
          type="number"
          onChange={getData}
        />
        <label>Your Question</label>
        <textarea
          className="w-100 input"
          id="msg"
          rows="4"
          onChange={getData}
        ></textarea>
        <div className="button">
          <button type="submit" className="w-100">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GetInTouchForm;
