import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import idea from "../../../../Resources/Assets/idea@4x.svg";
import Path from "../../../../Resources/Assets/Path 10919.svg";
import "./TascActivity.css";
function TascActivity() {
  const [toggleText, setToggleText] = useState(false);
  return (
    <div className="TascActivity">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col md={3} xs={12} className="position-relative darkSkyContainer">
            <div
              className="activityContent"
              onMouseEnter={() => {
                setToggleText(true);
              }}
              onMouseLeave={() => {
                setToggleText(false);
              }}
            >
              <h2>Tasc Activity</h2>
              <p>Program Development</p>
              <p>IT Consultancy</p>
            </div>
          </Col>
          <Col md={9}  xs={12} className="d-flex align-items-end position-relative aboutManContainer">
            <div className="DevelopmentContent">
              <div className="title">
                <h2>
                  {" "}
                  <div>
                    <img src={idea} alt="idea" />
                    <p>
                      {" "}
                      {toggleText ? "it Consultancy" : "Program Development"}
                    </p>
                  </div>
                  <img src={Path} alt="Path" />
                </h2>

                <p className="pr-2">
                  {toggleText
                    ? "Tasc Consultancy Department provides services in various areas. We offer consultancy services in fields like ITsecurity and privacy, databases, business re-engineering, andweb applications. Our specialists address our clients’specific needs and provide solutions suitable for the clients’market but with technologies at the international standards."
                    : "Tasc develops various types and sizes of software packagesfor the Middle East and North Africa markets with the latesttechnologies available. Tasc’s solutions are flexible,adaptable, and provide an abundance of reports and statisticsto help decision-makers grow their organizations."}
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
