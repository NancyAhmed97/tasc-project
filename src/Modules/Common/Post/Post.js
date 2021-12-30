import React from "react";
import postImg from "../../../Resources/Assets/post.png";
import calendar from "../../../Resources/Assets/calendar.svg";
import arrowRight from "../../../Resources/Assets/arrow-right.svg";
import { Link } from "react-router-dom";
import "./Post.css";
function Post() {
  return (
    <div className="post">
      <div className="overlay"></div>
      <img src={postImg} alt="postImg" />
      <div className="Content">
        <p className="date">
          <img src={ calendar} alt="calendar" />
          14, November 2021
        </p>
        <h5>Be Yourself, Everyone Else Is Already Taken.</h5>
        <p className="arrowRight mt-4">
          <Link to="/postdetails">
            {" "}
            View post <img src={arrowRight} alt="arrowRight" />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Post;
