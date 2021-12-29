import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import idea from "../../../../Resources/Assets/idea@4x.svg";
import Path from "../../../../Resources/Assets/Path 10919.svg";
import "./TascActivity.css";
function TascActivity() {
  return (
    <div className="TascActivity">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col md={3} className="position-relative">
            <div className="activityContent">
              <h2>Tasc Activity</h2>
              <p>Program Development</p>
              <p>IT Consultancy</p>
            </div>
          </Col>
          <Col md={9} className="d-flex align-items-end position-relative">
            <div className="DevelopmentContent" >
              <div className="title">
                <h2>
                  {" "}
                  <img src={idea} alt="idea" />
                  Program Development
                  <img src={Path} alt="Path" />

                </h2>

                <p>
                  ASCON develops various types and sizes of software packages
                  for the Middle East and North Africa markets with the latest
                  technologies available. ASCON’s solutions are flexible,
                  adaptable, and provide an abundance of reports and statistics
                  to help decision-makers grow their organizations.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TascActivity;
