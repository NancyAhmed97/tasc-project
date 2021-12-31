import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LatestPosts.css";
function LatestPosts() {
  const [changeFirstText, setChangeFirstText] = useState(false);
  const [changSecondText, setChangSecondText] = useState(false);
  return (
    <div className="LatestPosts">
      <section
        class="latest-posts-section"
        data-v-d078e6ae=""
        data-v-e100241a=""
      >
        <div class="latest-posts-section__accordion" data-v-d078e6ae="">
          <div
            class="latest-posts-section__accordion__img img-1"
            data-v-d078e6ae=""
          >
            {!(changeFirstText || changSecondText) && (
              <div className="overlay"></div>
            )}

            {changeFirstText || changSecondText ? (
              <p className="title">
                {" "}
                Be Yourself, Everyone Else Is Already Taken.
              </p>
            ) : (
              <>
                <div className="textContainer">
                  <p
                    style={{ position: "relative", zIndex: "200" }}
                    className="titlePragraph"
                  >
                    {" "}
                    Be Yourself, Everyone Else Is Already Taken.
                  </p>
                  <p className="text-post">
                    Aenean imperdiet dignissim pulvinar. Nullam faucibus nibh at
                    egestas dignissim. Nunc euismod fringilla nisl, vitae
                    efficitur arcu sagittis
                  </p>
                  <Link to="/postdetails" className="text-white">
                    View post
                  </Link>
                </div>
              </>
            )}
          </div>
          <div
            class="latest-posts-section__accordion__img img-2"
            data-v-d078e6ae=""
            onMouseEnter={() => {
              setChangeFirstText(true);
            }}
            onMouseLeave={() => {
              setChangeFirstText(false);
            }}
          >
            {changeFirstText && <div className="overlay"></div>}

            {changeFirstText ? (
              <>
                  <div className="textContainer">
                  <p
                    style={{ position: "relative", zIndex: "200" }}
                    className="titlePragraph"
                  >
                    {" "}
                    Be Yourself, Everyone Else Is Already Taken.
                  </p>
                  <p className="text-post">
                    Aenean imperdiet dignissim pulvinar. Nullam faucibus nibh at
                    egestas dignissim. Nunc euismod fringilla nisl, vitae
                    efficitur arcu sagittis
                  </p>
                  <Link to="/postdetails" className="text-white">
                    View post
                  </Link>
                </div>
              </>
            ) : (
              <p className="title">
                {" "}
                Be Yourself, Everyone Else Is Already Taken.
              </p>
            )}
          </div>
          <div
            class="latest-posts-section__accordion__img img-3"
            data-v-d078e6ae=""
            onMouseEnter={() => {
              setChangSecondText(true);
            }}
            onMouseLeave={() => {
              setChangSecondText(false);
            }}
          >
            {changSecondText && <div className="overlay"></div>}

            {changSecondText ? (
              <>
                <div className="textContainer">
                  <p
                    style={{ position: "relative", zIndex: "200" }}
                    className="titlePragraph"
                  >
                    {" "}
                    Be Yourself, Everyone Else Is Already Taken.
                  </p>
                  <p className="text-post">
                    Aenean imperdiet dignissim pulvinar. Nullam faucibus nibh at
                    egestas dignissim. Nunc euismod fringilla nisl, vitae
                    efficitur arcu sagittis
                  </p>
                  <Link to="/postdetails" className="text-white">
                    View post
                  </Link>
                </div>
              </>
            ) : (
              <p className="title">
                {" "}
                Be Yourself, Everyone Else Is Already Taken.
              </p>
            )}
          </div>{" "}
        </div>
      </section>
      {/* <div className="overlay"></div>
      <Container fluid>
        <Row>
          <Col md={6} xs={12} className="p-0 first-sec">
            <div  className="textContainer">
              <p style={{ position: "relative", zIndex: "200" }}>
                {" "}
                Be Yourself, Everyone Else Is Already Taken.
              </p>
              <p className="text-post">
                Aenean imperdiet dignissim pulvinar. Nullam faucibus nibh at
                egestas dignissim. Nunc euismod fringilla nisl, vitae efficitur
                arcu sagittis
              </p>
              <Link to="/postdetails" className="text-white">
              View post
                    </Link>
            </div>
          </Col>

          <Col md={3} className="third-sec">
            <p> Be Yourself, Everyone Else Is Already Taken.</p>
          </Col>
          <Col md={3} className="scond-sec">
            <p> Be Yourself, Everyone Else Is Already Taken.</p>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default LatestPosts;
