import React from "react";
import one from "../../../Resources/Assets/01.svg";
import darksquare from "../../../Resources/Assets/darksquare.svg";
import lightsquare from "../../../Resources/Assets/lightsquare.svg";
import two from "../../../Resources/Assets/02.svg";
import three from "../../../Resources/Assets/03.svg";
import "./Title.css";
function Title({ title }) {
  return (
    <div className={title==="Accounting Manager"?"Title dark":"Title"}>
      {title === "General Manager" && (
        <>
          <img src={one} alt="one" />
          <img src={darksquare} alt="darksquare" className="sqare" />
        </>
      )}
      {title === "Accounting Manager" && (
        <>
          <img src={two} alt="two" />
          <img src={lightsquare} alt="darksquare" className="sqare" />
        </>
      )}
      {title === "IT Manager" && (
        <>
          <img src={three} alt="three" />
          <img src={darksquare} alt="darksquare" className="itsqare" />
        </>
      )}
      <h1>{title}</h1>
      {title === "IT Manager" && <p className="dark">Advantages</p>}
      {title === "General Manager" && <p className="dark">Advantages</p>}
      {title === "Accounting Manager" && <p className="light">Advantages</p>}
    </div>
  );
}

export default Title;
