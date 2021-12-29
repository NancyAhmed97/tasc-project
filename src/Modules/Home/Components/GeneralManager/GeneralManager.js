import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GeneralManagerImg from "../../../../Resources/Assets/GeneralManager.png";
import Title from "../..///../../Modules/Common/Title/Title"
import "./GeneralManager.css";
function GeneralManager() {
  return (
    <div className="GeneralManager">
      <Container fluid>
        
        <Row>
          <Col md={6} xs={12} className="pt-5 mt-4">
          <Title title="General Manager" />

            <ul>
              <div >
                <li>Rank your customer buy the average time they take to pay so you can brevet a cash flow problem.</li>
                <li>Preventing a loss on a certain product or service.</li>
              </div>
              <div>
                <li>Providing the shareholders with a detailed report for the company growth wherever it is.</li>
              </div>
            </ul>
          </Col>
          <Col md={6} xs={12} className="p-0">
            <img
              src={GeneralManagerImg}
              alt="GeneralManagerImg"
              className="w-100 GeneralManagerImg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GeneralManager;
