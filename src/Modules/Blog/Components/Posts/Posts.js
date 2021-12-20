import React from "react";
import { Pagination } from "react-bootstrap";
import "./Posts.css";
function Posts() {
  return (
    <div ClassName="Posts">
 
{/* 
      <div ClassName="Paginate">
        <ul ClassName="nav nav-pills mb-3 " id="pills-tab" role="tablist">
          <li ClassName="nav-item" role="presentation">
            <a
              ClassName="nav-link page page-prev"
              id="pills-testimona-tab"
              data-page="prev"
              data-toggle="pill"
              href="/"
              role="tab"
              aria-controls="pills-testimona"
              aria-selected="false"
              aria-hidden="true"
            >
              «
            </a>
          </li>
          <li ClassName="nav-item" role="presentation">
            <a
              ClassName="nav-link "
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              4
            </a>
          </li>
          <li ClassName="nav-item" role="presentation">
            <a
              ClassName="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              3
            </a>
          </li>
          <li ClassName="nav-item" role="presentation">
            <a
              ClassName="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              2
            </a>
          </li>
          <li ClassName="nav-item" role="presentation">
            <a
              ClassName="nav-link active"
              id="pills-about-tab"
              data-toggle="pill"
              href="#pills-about"
              role="tab"
              aria-controls="pills-about"
              aria-selected="false"
            >
              1
            </a>
          </li>

          <li ClassName="nav-item" role="presentation">
            <a
              ClassName="nav-link page page-next"
              id="pills-testimona-tab"
              data-page="next"
              data-toggle="pill"
              href="/"
              role="tab"
              aria-controls="pills-testimona"
              aria-selected="false"
              aria-hidden="true"
            >
              »
            </a>
          </li>
        </ul>
      </div> */}
      <Pagination>
  {/* <Pagination.First /> */}
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  {/* <Pagination.Ellipsis /> */}

  {/* <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item >{14}</Pagination.Item> */}

  {/* <Pagination.Ellipsis /> */}
  {/* <Pagination.Item>{20}</Pagination.Item> */}
  <Pagination.Next />
  {/* <Pagination.Last /> */}
</Pagination>
    </div>
  );
}

export default Posts;
