import React, { useState, useEffect } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import FooterLogo from "../../../Resources/Assets/FooterLogo.png";
import facebook from "../../../Resources/Assets/facebook.svg";
import twitter from "../../../Resources/Assets/twitter.svg";
import instagram from "../../../Resources/Assets/instagram.svg";
import topArrow from "../../../Resources/Assets/topArrow.svg";
import langIcon from "../../../Resources/Assets/langIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeLocal } from "../../../Redux/Localization";

import "./Footer.css";
import { Link } from "react-router-dom";
function Footer({ activeState }) {
  const dispatch = useDispatch();
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [visible, setIsVisible] = useState(false);
  const [lang, setLang] = useState("")

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col
            md="6"
            xs={12}
            style={{ position: "relative" }}
            className={currentLocal.language === "العربيه" && "text-right"}
          >
            <div className="footer-img">
              <Link to="/">
                <img src={FooterLogo} alt="FooterLogo" />
              </Link>
              <p>
                Aenean imperdiet dignissim pulvinar. Nullam faucibus nibh at
                egestas dignissim. Nunc euismod fringilla nisl, vitae efficitur
                arcu sagittis nec. Nam placerat nec felis id interdum. Morbi
                lacinia, ex vel porttitor aliquam, ante ligula suscipit est, et
                euismod nibh ante eu justo. Nunc euismod fringilla nisl, vitae
                efficitur arcu sagittis nec.
              </p>
            </div>
          </Col>
          <Col
            md="4"
            xs={12}
            className={currentLocal.language === "العربيه" && "text-right"}
          >
            <div className="footer-links">
              <div className="mt-3">
                <ul>
                  <li
                    className={
                      activeState === "about"
                        ? "active text-white "
                        : "text-white "
                    }
                  >
                    <Link
                      to="/aboutus"
                      className={
                        activeState === "about" ? "text-white " : "text-white "
                      }
                    >
                      {currentLocal.navbar.aboutus}{" "}
                    </Link>
                  </li>

                  <li
                    className={
                      activeState === "blog"
                        ? "active text-white mt-3"
                        : "text-white mt-3"
                    }
                  >
                    <Link
                      to="/blog"
                      className={
                        activeState === "blog"
                          ? "text-white "
                          : "text-white px-3"
                      }
                    >
                      {currentLocal.navbar.blog}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <ul>
                  <li
                    className={
                      activeState === "pricing"
                        ? "active text-white "
                        : "text-white"
                    }
                  >
                    <Link
                      to="/pricing"
                      className={
                        activeState === "pricing"
                          ? "text-white "
                          : "text-white px-3"
                      }
                    >
                      {currentLocal.navbar.pricing}
                    </Link>
                  </li>
                  <li
                    className={
                      activeState === "contact"
                        ? "active text-white mt-3"
                        : "text-white mt-3"
                    }
                  >
                    <Link
                      to="/contactus"
                      className={
                        activeState === "contact"
                          ? "text-white "
                          : "text-white "
                      }
                    >
                      {currentLocal.navbar.contactus}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            md="2"
            xs={12}
            className={
              currentLocal.language === "العربيه"
                ? " arSocial-medoiaCol"
                : "social-medoiaCol"
            }
          >
            <ul className="social-medoia ">
              <li className="d-inline-block facebook">
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                >
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li className="d-inline-block mx-2">
                <a
                  target="_blank"
                  href="https://www.twitter.com/"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li className="d-inline-block mx-2">
                <a
                  target="_blank"
                  href="https://www.instagram.com/"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
            </ul>
            <div className="langouage">
              <Dropdown>
                <Dropdown.Toggle
                  variant="transparent"
                  className="text-white"
                  id="dropdown-basic"
                >
                  <div>
                    <img src={langIcon} alt="langIcon" />
                    {lang ? lang : "English"}
                    {/* {currentLocal.language} */}
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={(e) => {
                      dispatch(
                        changeLocal(
                          currentLocal.language === "English" ? "ar" : "en"
                        )
                      );
                      setLang(e.target.id);
                      console.log(e.target.id);

                    }}
                    id="Arabic"
                  >
                    {lang?"English" :lang }
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="arrow"
              onClick={scrollToTop}
              style={{ display: visible ? "block" : "none" }}
            >
              <div className="arrow-container">
                <img src={topArrow} alt="topArrow" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
