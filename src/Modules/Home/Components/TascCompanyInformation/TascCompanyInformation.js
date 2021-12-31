import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tascImg from "../../../../Resources/Assets/tascImg.png";
import "./TascCompanyInformation.css";
function TascCompanyInformation({state}) {
  return (
    <div className="TascCompanyInformation">
      <Container fluid>
        <Row>
          <Col md={7} xs={12}>
            <div className="title">
              <h1>Tasc Company Information</h1>
              <p>About us</p>
            </div>
          <div className="pragraph">
              <p>
                Established in the year 1990, Tasc developed and implemented
                specialized ERP software solutions and offers consultation
                services in the information technology and financial fields. The
                experience that Tasc has gained over the years contributed to
                the excellent customer satisfaction that our solutions enjoy in
                the market.
              </p>
              <p>
                Continuous evolution and modernization are Tasc’s philosophy.
                Tasc uses the most potent ORACLE Database. Tasc’s systems have
                a standard: the flexibility and ease available to users of the
                systems and the intensity of the reports in terms of quantity to
                serve business owners.
              </p>
          
          {/* <div className="ul">
          <div className="first-para">    <p className="paragraph">   Estabpshed in the year 1990, Tasc developed and implemented
                speciapzed ERP software solutions and offers consultation
                services in the information technology and financial fields. The
                experience that Tasc has gained over the years contributed to
                the excellent customer satisfaction that our solutions enjoy in
                the market.</p></div>
              <p>   Continuous evolution and modernization are Tasc’s philosophy.
                Tasc uses the most potent ORACLE Database. Tasc’s systems have
                a standard: the flexibipty and ease available to users of the
                systems and the intensity of the reports in terms of quantity to
                serve business owners.</p>
              </div> */}

            </div>
            {state!=="about"&&
            <div className="button">
              <button className="btn">See more</button>
            </div>
            }
          </Col>
          <Col md={5} xs={12}>
            <img src={tascImg} alt="tascImg" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TascCompanyInformation;
