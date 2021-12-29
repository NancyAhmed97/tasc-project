import React from "react";
import calendar from "../../../.././../../../../Resources/Assets/calendar.svg";
import landingPost from "../../../.././../../../../Resources/Assets/landingPost.png";
import "./LandingPost.css";
function LandingPost() {
  return (
    <div className="LandingPost">
      <h2>Be Yourself, Everyone Else Is Already Taken.</h2>
      <p className="date">
        <img src={calendar} alt="calendar" />
        14, November 2021
      </p>
      <img src={landingPost} alt="landingPost" className="landingPost" />
      <div className="paragraph">
        <p>
          Imitation of medicines, their waste, commercial fraud, and all forms
          of corruption in medicine have come to an end with the dawn of smart
          technological systems. The Kingdom of Saudi Arabia has begun to take
          practical steps to urge pharmaceutical companies to register with the
          Saudi Numbering Center. According to the Food and Medicine Authority
          regulations, they will update their data and product lists through the
          Medicine tracking system with an immediate Medicine control plan.
        </p>
        <p>
          This system is part of the Food and Medicine Authority’s plan to
          participate in the National Transformation Program 2020, aiming to
          achieve Saudi Vision 2030.
        </p>
        <p>
          Learn with us about this plan and the new “RSD” Medicine tracking
          system, its importance, and its most prominent advantages.
        </p>
      </div>
    </div>
  );
}

export default LandingPost;
