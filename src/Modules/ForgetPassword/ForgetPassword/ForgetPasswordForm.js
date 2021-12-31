import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from "react-redux";
import img from "../../../Resources/Assets/Group 6026.png"
import { Link } from 'react-router-dom';
import "./ForgetPasswordForm.css"
function ForgetPasswordForm() {
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
				setAlert(false)
				break;
			}
			default:
				break;
		}
	};
  return (
    <div className='ForgetPasswordFormContainer'>
<Container>
  <Row>
      <Col md={6} xs={12} className='forgetPassCol'>
      <form onSubmit={sendData} className="forgetPassForm">
 				<div className="form">
 					<div >
					 <div className="errorMsg">
                {alert && !email && (
                  <div className="f-12">*{currentLocal.login.emailIsRequired}</div>
                )}
              </div>
              <label>{currentLocal.login.email}</label>
 						<input
							className={
								alert
								  ? "error input form-control my-3"
								  : "input form-control my-3"
							  }
							type="email"
							id="email"
							value={email}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="button text-center">
					<button type="submit" className="button-primary" >
						{currentLocal.login.send}
					</button>
				</div>
				<div className="checkAccount">
					<span> {currentLocal.login.RememberYourPassword}</span>
					<span className="mx-2">
						{" "}
						<Link to="/loginByEmail"> {currentLocal.login.signin} </Link>
					</span>
				</div>
			</form>
      </Col>
      <Col md={6} xs={12}>
        <img src={img} alt="img" />
      </Col>
    </Row>
</Container>
    </div>
  )
}

export default ForgetPasswordForm
