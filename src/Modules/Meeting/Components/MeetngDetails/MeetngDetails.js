import React from "react";
import { Container } from "react-bootstrap";
import "./MeetngDetails.css";
function MeetngDetails() {
  return (
    <div className="MeetngDetails">
      <Container>
        <div className="py-5">
          <h2>i want a meeting with tasc expert at</h2>
          <p><span>Duration&nbsp; :</span>1 hour</p>
          <p>Schedule a 1-hour free meeting with an expert, to get:</p>
          <ul>
            <li>a tailored demonstration</li>
            <li>recommendations based on your needs</li>
            <li>answers to your questions about Odoo</li>
            <li>information about pricing & methodology</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default MeetngDetails;
