import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../../Common/Title/Title";
import ITMangerImg from "../../../../Resources/Assets/ITMangerImg.png";
import "./ITManager.css";
function ITManager() {
  return (
    <div className="ITManager">
      <Container fluid>
        <Row>
          <Col md={7} xs={12}>
            <Title title="IT Manager" />
            <ul>
              <div>
                <li>
                  The software is using oracle database for its security and its
                  DBM.
                </li>
                <li>The user is designed to be easily learnable.</li>
            
              </div>
              <div>
              <li>
                  25 years’ experience in the market and our software is error
                  free.
                </li>
              </div>
            </ul>
          </Col>
          <Col md={5} xs={12} className="p-0 img-container">
              <img src={ITMangerImg} alt="ITMangerImg" className="w-100" />
          </Col>
        </Row>
      </Container>
      {/* <Title title="IT Manager" /> */}
    </div>
  );
}

export default ITManager;
