import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import secondPost from "../../../../../../../../Resources/Assets/Rectangle 3748.png"
import   firstPost from "../../../../../../../../Resources/Assets/Rectangle 3747.png"
import   facebook from "../../../../../../../../Resources/Assets/Icon awesome-facebook-f.svg"
import   twitter from "../../../../../../../../Resources/Assets/Icon metro-twitter.svg"
import  linkedinIn from "../../../../../../../../Resources/Assets/Icon awesome-linkedin-in.svg"
import "./ContentWithoutBackwardContainer.css";

function ContentWithoutBackwardContainer() {
  return (
    <div className="ContentWithoutBackwardContainer">
      <Container fluid className="p-0">
        <Row>
          <h1>Content without backward-compatible data.</h1>
          <p className="mb-4">
            heir community. I wonder how they wou if their own child witnessed
            such a level of violence?
          </p>
          <p className="mb-4">
            “There is absolutely no justification for an attack like this in our
            communities and we must all work together to bring those responsible
            to justice and to stop this from happening to another child.”
          </p>
          <p>
            Earlier this month, the PSNI launched a hard-hitting advertisement
            campaign aimed at changing public attitudes to paramilitary attacks.
          </p>
          <Row className="mt-5 imgContainer">
              <Col md={4} xs={12}>
              <img src={firstPost} alt="firstPost" />
              </Col>
              <Col md={4} xs={12}>
              <img src={secondPost} alt="secondPost" className="secondPost"/>
              </Col>
          </Row>
          <h2>Content without backward-compatible data.</h2>

          <ul className="pargraph">
            <li>The system monitors the entire supply process.</li>
            <li>Makes sure that the medicines are “not adulterated”.</li>
            <li>
              Provides reliable data regarding the Medicines used in fraud and
              their sources.
            </li>
            <li>
              Gives us information about the availability of the Medicine’s
              location in a short time.
            </li>
            <li>Enables the consumer to know all the Medicine data.</li>
            <li>
              Helps to optimize the use of pharmaceuticals, and reduce waste.
            </li>
            <li>
              Immediately stops the circulation of withdrawn medicines. It
              ensures no circulation happens by giving a warning.
            </li>
            <li>
              The “RSD” Medicine tracking system allows the consumer to inquire
              about a Medicine’s safety and report any side effects after its
              use.
            </li>
          </ul>
          <div className="sharePost ">
              <ul>
                  <li className="d-inline-block"><p>Share post</p></li>
                  <li className="d-inline-block"><img src={facebook} alt="facebook" /></li>
                  <li className="d-inline-block"><img src={twitter} alt="twitter" /></li>
                  <li className="d-inline-block"><img src={linkedinIn} alt="linkedinIn" /></li>
              </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ContentWithoutBackwardContainer;
