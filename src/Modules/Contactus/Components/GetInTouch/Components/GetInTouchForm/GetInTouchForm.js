import React from "react";
import "./GetInTouchForm.css";
function GetInTouchForm() {
  const sendData = (e) => {
    e.preventDefault();

    console.log("hooo");
  };
  return (
    <div className="GetInTouchForm">
      <form onSubmit={sendData}>
        <p>
          We’re glad to discuss your organisation’s situation. So please contact
          us via the details below, or enter your request.
        </p>
        <input className="name w-100" type="text" placeholder="Name"/>
        <input className="email w-100" type="email" placeholder="E-mail"/>
        <input className="phone w-100" type="number" placeholder="Phone Number"/>
        <textarea className="w-100" rows="4" placeholder="Your Question"></textarea>
        <div className="button">
            <button type="submit" className="w-100">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default GetInTouchForm;
