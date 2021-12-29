import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom"
import "./LatestPosts.css";
function LatestPosts() {
  return (
    
    <div className="LatestPosts" style={{ position: "relative" }}>
      <div className="overlay"></div>
      <Container fluid>
        <Row>
          <Col md={6} xs={12} className="p-0 first-sec">
            <div  className="textContainer">
              <p style={{ position: "relative", zIndex: "200" }}>
                {" "}
                Be Yourself, Everyone Else Is Already Taken.
              </p>
              <p className="text-post">
                Aenean imperdiet dignissim pulvinar. Nullam faucibus nibh at
                egestas dignissim. Nunc euismod fringilla nisl, vitae efficitur
                arcu sagittis
              </p>
              <Link to="/postdetails" className="text-white">
              View post
                    </Link>
            </div>
          </Col>

          <Col md={3} className="third-sec">
            <p> Be Yourself, Everyone Else Is Already Taken.</p>
          </Col>
          <Col md={3} className="scond-sec">
            <p> Be Yourself, Everyone Else Is Already Taken.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LatestPosts;
