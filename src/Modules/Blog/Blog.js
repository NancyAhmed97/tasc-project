import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Common/Footer/Footer";
import LandingSection from "../Common/LandingPage/LandingSection";
import Navbar from "../Common/Navbar/Navbar";
import LatestPosts from "../Home/Components/LatestPosts/LatestPosts";
import Posts from "./Components/Posts/Posts";
import "./Blog.css"
function Blog() {
  return (
    <div className="blog">
      <Navbar activePage="Blog" />
      <LandingSection activePage="Blog" />
      <Container>
        <p className="blogPargraph"> latest posts</p>
      </Container>
      <LatestPosts />
      <Container>
        <p className="blogPargraph"> latest posts</p>
      </Container>
      <Posts />
      <Footer activeState="blog" />
    </div>
  );
}

export default Blog;
