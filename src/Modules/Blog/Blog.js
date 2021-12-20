
import React from "react";
import Footer from "../Common/Footer/Footer";
import LandingSection from "../Common/LandingPage/LandingSection";
import Navbar from "../Common/Navbar/Navbar";
import LatestPosts from "../Home/Components/LatestPosts/LatestPosts";
import Posts from "./Components/Posts/Posts";
function Blog() {
  return (
    <div>
      <Navbar activePage="Blog" />
      <LandingSection activePage="Blog" />
      <LatestPosts />
      <Posts />
      <Footer activeState="blog" />
    </div>
  );
}

export default Blog;
