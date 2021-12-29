import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Resources/Assets/logo.png";
import loginIcon from "../../../Resources/Assets/loginIcon.png";
import LightLogo from "../../../Resources/Assets/LightLogo.png";
import lightLogin from "../../../Resources/Assets/lightLogin.png";
import langIcon from "../../../Resources/Assets/Icon feather-globe.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbarr({activeState,activePage}) {
  console.log(activePage);
  console.log(activePage);
  return (


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={activePage?"lightNavbar":"navbar "}>
      <Container>
        <Navbar.Brand href="/"> <img src={activePage?LightLogo:logo} alt="logo-img" /></Navbar.Brand>
        {activePage !=="login"?
          <>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
     
      
          <Nav className="m-auto nav-links">
            <Link to="/"  className={activeState==="home"?"homeActive text-white mx-3 ":(activePage?"lightLink mx-3":"text-white mx-3 ")}>
              Home
            </Link>
            <Link to="/aboutus"  className={activePage==="About us"?"active mx-3 ":(activePage?"lightLink mx-3":"text-white mx-3 ")}>
              About us
            </Link>
            <Link to="/blog" className={activePage==="Blog"?"active  mx-3 ":(activePage?"lightLink mx-3":"text-white mx-3 ")}>
              Blog
            </Link>

            <Link to="/pricing" className={activePage==="Pricing plans"?"active  mx-3 ":(activePage?"lightLink mx-3":"text-white mx-3 ")}>
              Pricing
            </Link>
            <Link to="/contactus" className={activePage==="Contact us"?"active  mx-3 ":(activePage?"lightLink mx-3":"text-white mx-3 ")}>
              Contact us
            </Link>
          </Nav>
          <Nav>
            <div className="login ">
              <Link to="/login" className={activePage?"lightlogin":"text-white"}>
                <img src={activePage?lightLogin:loginIcon} alt="loginIcon" />
                <p className="text-white d-inline-block mx-2">login</p>
              </Link>
            </div>
          </Nav>
          </Navbar.Collapse>
          </>
          :
      <>
               <div className="langouage">
          <Dropdown>
             <Dropdown.Toggle
              variant="transparent"
              className="text-white"
              id="dropdown-basic"
            >
              <div>
                <img src={langIcon} alt="langIcon" />
                {/* {lang ? lang : "English"} */}
                English
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                id="Arabic"
                // onClick={(e) => {
                //   setLang(e.target.id);
                // }}
              >
                Arabic
                {/* {lang ?"English" :lang } */}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </>

          }
      </Container>
    </Navbar>
  );
}

export default Navbarr;
