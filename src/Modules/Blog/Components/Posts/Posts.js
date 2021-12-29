import React from "react";
import Post from "../../../Common/Post/Post";
import leftArrow from "../../../../Resources/Icon feather-arrow-right.svg";
import rightArrow from "../../../../Resources/Fonts/Icon feather-arrow-right.svg";
import ReactPaginate from "react-paginate";
import "./Posts.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
function Posts() {
  const JsonData = [
    {
      id: 1,
      firstName: "Phineas",
      lastName: "Franciottoi",
      email: "pfranciottoi0@hostgator.com",
      password: "y0pWrGzmDz",
    },
    {
      id: 2,
      firstName: "Mikel",
      lastName: "Gregoli",
      email: "mgregoli1@amazon.de",
      password: "G0VfMCL",
    },
    {
      id: 3,
      firstName: "Moira",
      lastName: "Mazzilli",
      email: "mmazzilli2@163.com",
      password: "3GgdWoOfT",
    },
    {
      id: 4,
      firstName: "Kaja",
      lastName: "True",
      email: "ktrue3@washington.edu",
      password: "N6032b",
    },
    {
      id: 5,
      firstName: "Robbie",
      lastName: "Mc Harg",
      email: "rmcharg4@scientificamerican.com",
      password: "9aYRY2B5Jgj",
    },
    {
      id: 6,
      firstName: "Niki",
      lastName: "Daber",
      email: "ndaber5@army.mil",
      password: "ccKCMM",
    },
    {
      id: 7,
      firstName: "Rana",
      lastName: "Gyrgorwicx",
      email: "rgyrgorwicx6@booking.com",
      password: "1R3G2WJ",
    },
    {
      id: 8,
      firstName: "Johnette",
      lastName: "Torricella",
      email: "jtorricella7@discuz.net",
      password: "l6Fip9FINxzR",
    },
    {
      id: 9,
      firstName: "Kristoforo",
      lastName: "Slinn",
      email: "kslinn8@scribd.com",
      password: "pT35uEWU5y",
    },
    {
      id: 10,
      firstName: "Wye",
      lastName: "Bushrod",
      email: "wbushrod9@infoseek.co.jp",
      password: "ElyzUYgyyWC",
    },
    {
      id: 11,
      firstName: "Aline",
      lastName: "Boydle",
      email: "aboydlea@woothemes.com",
      password: "bnpqvhjNN",
    },
    {
      id: 12,
      firstName: "Dall",
      lastName: "Ettritch",
      email: "dettritchb@wiley.com",
      password: "l4LSCXxY",
    },
    {
      id: 13,
      firstName: "Wynn",
      lastName: "Vautier",
      email: "wvautierc@dagondesign.com",
      password: "w5E58sLnrvzf",
    },
    {
      id: 14,
      firstName: "Cami",
      lastName: "Pfaffe",
      email: "cpfaffed@auda.org.au",
      password: "Ne8TDr",
    },
    {
      id: 15,
      firstName: "Althea",
      lastName: "Wenzel",
      email: "awenzele@discuz.net",
      password: "c9pEP94",
    },
    {
      id: 16,
      firstName: "Charlotte",
      lastName: "McAvey",
      email: "cmcaveyf@bloglovin.com",
      password: "MvRQqJUS0",
    },
    {
      id: 17,
      firstName: "Nickolas",
      lastName: "Swift",
      email: "nswiftg@taobao.com",
      password: "OXfdghdGt",
    },
    {
      id: 18,
      firstName: "Cybill",
      lastName: "Coward",
      email: "ccowardh@cnn.com",
      password: "UO7XQFU",
    },
    {
      id: 19,
      firstName: "Chauncey",
      lastName: "Patey",
      email: "cpateyi@ucsd.edu",
      password: "ufq5VPTPiE",
    },
    {
      id: 20,
      firstName: "Gregorius",
      lastName: "Petch",
      email: "gpetchj@constantcontact.com",
      password: "bgvb9gvv",
    },
    {
      id: 21,
      firstName: "Smith",
      lastName: "Pratton",
      email: "sprattonk@flavors.me",
      password: "7uTY1Zi7l",
    },
    {
      id: 22,
      firstName: "Farrell",
      lastName: "Tennock",
      email: "ftennockl@newsvine.com",
      password: "X0SYV4QalqHV",
    },
    {
      id: 23,
      firstName: "Jacky",
      lastName: "Venediktov",
      email: "jvenediktovm@skype.com",
      password: "SmzmsDflONe",
    },
    {
      id: 24,
      firstName: "Bordie",
      lastName: "Chaunce",
      email: "bchauncen@vk.com",
      password: "AIeZPnJfJ59",
    },
    {
      id: 25,
      firstName: "Francklin",
      lastName: "Lydiate",
      email: "flydiateo@sogou.com",
      password: "2BX7gn4wX4Qd",
    },
    {
      id: 26,
      firstName: "Eloise",
      lastName: "McEachern",
      email: "emceachernp@mediafire.com",
      password: "4uy6t7F2wC",
    },
    {
      id: 27,
      firstName: "Sidoney",
      lastName: "Jakeman",
      email: "sjakemanq@amazonaws.com",
      password: "qhdxMYSYz",
    },


  ];
  const users = JsonData.slice(0, 50);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <Col lg="4" md="6">
          <Post />
        </Col>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);
  console.log(usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="posts">
      {/* <Post /> */}
      {/* {displayUsers} */}
      <Container>
        <Row>{displayUsers}</Row>
      </Container>
      <ReactPaginate
        previousLabel={<img src={leftArrow} alt="leftArrow" />}
        nextLabel={<img src={rightArrow} alt="rightArrow" />}
        pageCount={pageCount}
        breakLabel={"none"}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Posts;
