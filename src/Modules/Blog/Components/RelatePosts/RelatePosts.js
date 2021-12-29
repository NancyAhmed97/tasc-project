import React from "react";
import Navbar from "../../../Common/Navbar/Navbar";
import RecentPosts from "./Components/Recent posts/RecentPost";
import PostDetails from "../../../../Modules/Blog/Components/RelatePosts/Components/PostDetails/PostDetails"
// import RelatedPosts from "./Components/Related posts/RelatedPostsContainer";
// import Contentwithoutbackward from "./Components/Contentwithoutbackward/ContentWithoutBackwardContainer";
import Footer from "../../../Common/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
function RelatePosts() {
  return (
    <div>
      <Navbar activePage="RelatePosts" />
     
     <Container>
       <Row>
         <Col md={9} xs={12}>
      <PostDetails />
         </Col>
         <Col md={3} xs={12}>
         <RecentPosts />
         </Col>
       </Row>
     </Container>
      {/* <Contentwithoutbackward />
      <RelatedPosts /> */}
      <Footer activeState="blog" />
    </div>
  );
}

export default RelatePosts;
