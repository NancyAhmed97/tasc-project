import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SafeBackup from "../../../../Resources/Assets/browser (1).svg";
import AnytimeAnywhere from "../../../../Resources/Assets/browser (2).svg";
import Updates from "../../../../Resources/Assets/browser (3).svg";
import "./AdvancedFeatures.css";
function AdvancedFeatures() {
  const AdvancedFeatures = [
    {
      img: SafeBackup,
      title: "Safe Backup",
      text: "Ensures the safety of the data by making regular backups through the system.",
    },
    {
      img: AnytimeAnywhere,
      title: "Anytime, Anywhere",
      text: "You only need an internet connection and you will be able to do your work. You can work on any device anytime from anywhere.",
    },
    {
      img: Updates,
      title: "Continuous Updates",
      text: "Get the latest software updates up-to-date and enjoy the constantly evolving software features.",
    },
  ];
  return (
    <div className="AdvancedFeatures">
      <Container>
        <div className="AdvancedFeaturesContainer">
          <Row>
            {AdvancedFeatures.map((item, value) => {
              return (
                <Col md={4} xs={12} key={value} className="item">
                  <div className="text-box">
                    <div className="img-container">
                      <img src={item.img} alt="img" />
                    </div>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default AdvancedFeatures;
