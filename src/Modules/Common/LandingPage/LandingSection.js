import React from "react";
import { Link } from "react-router-dom";
import "./LandingSection.css";
function LandingSection({activePage}) {
  return (
    <div className={activePage==="Pricing plans"?"Landing-pricing landing":(activePage==="Blog"?"Landing-blog landing":(activePage==="Contact us"?"Landing-contact landing":"LandingSection landing"))}>
      <div className="landing-container">
        <h1 className="text-white">Our  {activePage}</h1>
        <ul>
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <span className="text-white">{activePage}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LandingSection;
