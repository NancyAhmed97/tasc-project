import React from "react";
import "./Categoury.css";
function Categoury() {
    const filterByCategory=()=>{
    alert("fds")
    }
  return (
    <div className="Categoury">
      <div className="title">
        <h2>category</h2>
      </div>
      <ul>
        <li>
          <div onClick={filterByCategory}>November 2020</div>
          <div className="number">12</div>
        </li>
        <li>
          <div>November 2020</div>
          <div className="number">12</div>
        </li>
        <li>
          <div>November 2020</div>
          <div className="number">12</div>
        </li>

      </ul>
    </div>
  );
}

export default Categoury;
