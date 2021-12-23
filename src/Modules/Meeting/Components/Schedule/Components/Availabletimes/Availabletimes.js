import React,{useState} from "react";
import {Container,Row,Col}from "react-bootstrap"
import { Link } from "react-router-dom";
import "./Availabletimes.css";
function Availabletimes() {
  const [clickable, setClickable] = useState(false)
  const [value, setValue] = useState("")
  const chooseTime=(e)=>{
    setClickable(!clickable)
    setValue(e.target.id)
  }
  return <>
  <div className="Availabletimes">
      
      <p>Available times on <span> 8, December 2021</span> </p>
      <div className="AvailabletimesConatiner">
      <Container fluid className="p-0">
      <Row>
      <Col md={6} xs={6} >
      <div className={clickable&&value==="firstTime"?"clickable timeContainer":"timeContainer"} onClick={chooseTime} id="firstTime">
      10.00
      </div>
      </Col>
      <Col md={6} xs={6}>
           <div className={clickable&&value==="secondTime"?"clickable timeContainer":"timeContainer"} onClick={chooseTime} id="secondTime">
      11.00
      </div>
      </Col>
      <Col md={6} xs={6}>
           <div className={clickable&&value==="thirdTime"?"clickable timeContainer":"timeContainer"} onClick={chooseTime} id="thirdTime">
      12.00
      </div>
      </Col>
      <Col md={6} xs={6}>
           <div className={clickable&&value==="fourthTime"?"clickable timeContainer":"timeContainer"} onClick={chooseTime} id="fourthTime">
      13.00
      </div>
      </Col>
      <Col md={6} xs={6}>
               <div className={clickable&&value==="fifthTime"?"clickable timeContainer":"timeContainer"} onClick={chooseTime} id="fifthTime">
      14.00
      </div>
      </Col>
      <Col md={6} xs={6}>
               <div className={clickable&&value==="sixthTime"?"clickable timeContainer":"timeContainer"} onClick={chooseTime} id="sixthTime">
      15.00
      </div>
      </Col>
      <Col md={6} xs={6}>
               <div className={clickable&&value==="seventhTime"?"clickable timeContainer":"timeContainer"} onClick={chooseTime} id="seventhTime">
      16.00
      </div>
      </Col>
      <Col md={6} xs={6}>
               <div className={clickable&&value==="eighthTime"?"clickable timeContainer":"timeContainer"} onClick={chooseTime} id="eighthTime">
      17.00
      </div>
      </Col>
      </Row>
      </Container>
      </div>
      </div>
      <div className="availableButton">
      <button>
      <Link to="/Confirmyourdetails">Confirm </Link>
      </button>
      </div>
      </>
      
}

export default Availabletimes;
