import React from "react";
import { Container } from "react-bootstrap";
import Wrong from "../../../../Resources/Assets/Union 7.svg";
import right from "../../../../Resources/Assets/Icon awesome-check.svg";
import "./ApplicationPrices.css";
function ApplicationPrices() {
  return (
    <div className="ApplicationPrices">
      <Container>
        <div className="title text-center">
          <h2 className="py-5">Application Prices</h2>
        </div>

        <table>
          <tr>
            <th></th>
            <th>
              <p>Micro Business</p>
              <p>$200</p>
            </th>
            <th>
              <p>Small Business</p>
              <p>$500</p>
            </th>
            <th>
              <p>Medium Business</p>
              <p>$1000</p>
            </th>
          </tr>
          <tr>
            <td>Users Included</td>
            <td>3</td>
            <td>5</td>
            <td>12</td>
          </tr>
          <tr>
            <td>General Ledge</td>
            <td>
              <img src={right} alt="right" />
            </td>
            <td>
              <img src={right} alt="right" />
            </td>
            <td>
              <img src={right} alt="right" />
            </td>
          </tr>
          <tr>
            <td>Customizable Reports</td>
            <td>
              <img src={right} alt="right" />
            </td>
            <td>
              <img src={right} alt="right" />
            </td>
            <td>
              <img src={right} alt="right" />
            </td>
          </tr>
          <tr>
            <td>Business Intelligence</td>
            <td>Basic</td>
            <td>Basic</td>
            <td>Full</td>
          </tr>
          <tr>
            <td>Accounts Payable</td>
            <td>
              <img src={Wrong} alt="Wrong" />
            </td>
            <td>
              <img src={right} alt="right" />
            </td>
            <td>
              <img src={right} alt="right" />
            </td>{" "}
          </tr>
          <tr>
            <td>Accounts Receivable</td>
            <td>
              <img src={Wrong} alt="Wrong" />
            </td>
            <td><img src={right} alt="right" /></td>
            <td><img src={right} alt="right" /></td>
          </tr>
          <tr>
            <td>Bank & Printing Checks</td>
            <td>
              <img src={Wrong} alt="Wrong" />
            </td>
            <td><img src={right} alt="right" /></td>
            <td><img src={right} alt="right" /></td>
          </tr>
          <tr>
            <td>Cash Management</td>
            <td>
              <img src={Wrong} alt="Wrong" />
            </td>
            <td><img src={right} alt="right" /></td>
            <td><img src={right} alt="right" /></td>
          </tr>
          <tr>
            <td>Integrations</td>
            <td>
              <img src={Wrong} alt="Wrong" />
            </td>
            <td>Only what is available</td>
            <td>Any integration needed</td>
          </tr>
        </table>
        <ul>
          <li>The system monitors the entire supply process.</li>
          <li>Makes sure that the medicines are “not adulterated”.</li>
          <li>
            Provides reliable data regarding the Medicines used in fraud and
            their sources.
          </li>
        </ul>
        <div className="button">
            <button>Contact our expert</button>
        </div>
      </Container>
    </div>
  );
}

export default ApplicationPrices;
