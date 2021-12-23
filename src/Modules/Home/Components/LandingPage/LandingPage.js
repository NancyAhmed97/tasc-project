import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../../Common/Navbar/Navbar";
import "./LandingPage.css";
function LandingPage() {
  return (
    <>
      <div className="landingPage">
        <Navbar  activeState="home"/>
        <Container>
          <Row>
        <div className="landinpage-content">
        <Col md={12} xs={12}>
              <div className="landinpage-text mb-5 w-50">
                <p className="text-white  light">
                  All the best for your business.
                </p>
                <h1 className="text-white">
                  TASC partners with software solution providers
                </h1>
                <p className="text-white  mb-5 lighter">
                  give you the best functionality to meet your company needs.
                  You can now run your business the way you want using the best
                  solutions on the market.
                </p>
              </div>
            </Col>
            <Col md={12} xs={12}>
              <div className="landingpage-btn">
                <button className="contact-btn px-3 py-2 " >
                  <Link to="/meeting">Contact our expert</Link>
                </button>
                <button className="aboutus-btn px-4 py-2">
                <Link to="/aboutus">About us</Link>

                </button>
              </div>
            </Col>
        </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
