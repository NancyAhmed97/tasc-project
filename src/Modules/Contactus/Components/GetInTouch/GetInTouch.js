import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import GetInTouchForm from "./Components/GetInTouchForm/GetInTouchForm";
import GetInTouchInfo from "./Components/GetInTouchInfo/GetInTouchInfo";

import "./GetInTouch.css";
function GetInTouch() {
  return (
    <div className="GetInTouch">
      <Container>
        <Row>
          <Col md={6} xs={12} >
              <GetInTouchInfo />
          </Col>
          <Col md={6} xs={12} className="getTouchForm">
          <GetInTouchForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GetInTouch;
