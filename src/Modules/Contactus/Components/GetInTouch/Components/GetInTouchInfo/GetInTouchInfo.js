import React from 'react'
import location from "../../../../../../Resources/Assets/Group 6491.svg";
import call from "../../../../../../Resources/Assets/Group 6492.svg";
import msg from "../../../../../../Resources/Assets/Group 6493.svg";

function GetInTouchInfo() {
    return (
        <div className='GetInTouchInfo'>
                          <div className="title">
              <h2>Get in touch for any kind of help and information</h2>
            </div>
            <ul className='p-0'>
              <li>
                <ul className="p-0 mb-5 touchContainer">
                  <li className="d-inline-block">
                    <img src={location} alt="location" />
                  </li>
                  <li className="d-inline-block">
                    <h4> Our head office address:</h4>
                    <p>
                      3556 Hartford Way Vlg, Mount Pleasant, SC, 29466,
                      Australia.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0 mb-5 touchContainer">
                  <li className="d-inline-block">
                    <img src={call} alt="location" />
                  </li>
                  <li className="d-inline-block">
                      <h4>Call For Help</h4>
                    <p> + 966-11-4620694</p>
                    <p>
                    + 966-11-4612677

                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0 mb-5 touchContainer">
                  <li className="d-inline-block">
                    <img src={msg} alt="location" />
                  </li>
                  <li className="d-inline-block">
                    <h4> Mail us for information</h4>
                    <p>
                    noreply@envato.com

                    </p>
                    <p>noreply@consultio.com</p>
                  </li>
                </ul>
              </li>
            </ul>
        </div>
    )
}

export default GetInTouchInfo
