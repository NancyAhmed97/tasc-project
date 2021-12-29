import React from "react";
import Categoury from "./Components/Categoury/Categoury";
import RecentPostsContainer from "./Components/RecentPostsContainer/RecentPostsContainer";

function RecentPost() {
  return (
    <div className="RecentPost">
      <RecentPostsContainer />
      <Categoury />

    </div>
  );
}

export default RecentPost;
