import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
// import "./fullpage.parallax.min";
import logo from "./logo.png";
import profileImage from "./Mishall.png";
import icon from "./icon.png";
import * as Icons from "./icons";
import NavtekMockup from "./NavtekMockup.png";
import NavtekLogo from "./images/navtekLogo.png";
import YLMockup from "./images/ylmockup.png";
import YLLogo from "./images/yllogo.png";
import GistLogo from "./images/gistlogo.png";
import "./App.css";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  // require("fullpage.js/vendors/scrolloverflow"); // Optional. When using scrollOverflow:true
  // require("./fullpage.parallax.min")
  require("fullpage.js/vendors/scrolloverflow");
  // require('./statics/fullpage.scrollHorizontally.min');
};

const anchors = ["home", "about", "portfolio", "project", "contact"];

const Menu = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center"
    }}
  >
    <div
      className="menu"
      style={{
        position: "fixed",
        zIndex: 100,
        flexDirection: "row",
        padding: "1em",
        paddingTop: "0"
      }}
    >
      <ul id="menu">
        <li>
          <a href="/#portfolio">
            <h3>Portfolio</h3>
          </a>
        </li>
        <li>
          <a href="/#about">
            <img src={icon} alt="mishroom" style={{ maxWidth: "75px" }} />
          </a>
        </li>
        <li>
          <a href="/#contact">
            <h3>Contact</h3>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const shouldShowMenu = () => false;
// window.location.hash && window.location.hash !== "#home";

const App = () => (
  <div className="App">
    {shouldShowMenu() && <Menu />}
    <ReactFullpage
      pluginWrapper={pluginWrapper}
      // sectionsColor={originalColors}
      navigation={true}
      responsiveSlides={true}
      slidesNavigation={true}
      controlArrows={true}
      parallax={true}
      anchors={anchors}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className="background">
                <div
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <img
                    src={logo}
                    alt="mishroom"
                    style={{ maxWidth: "80vw", paddingBottom: "20px" }}
                  />
                  <br />
                  <span style={{ fontSize: "2vh" }}>
                    Websites | Apps | Sysytems
                  </span>
                </div>

                {/* <svg viewBox="0 0 1000 3000">
                  <path
                    fill="green"
                    fill-opacity="0"
                    stroke="blue"
                    stroke-opacity="0.8"
                    id="curve"
                    d="M 150 150 Q 450 150 350 200 Q 250 250 450 250 Q 700 250 550 300 Q 400 350 650 350 Q 800 350 750 400 "
                  />
                </svg>
                <svg viewBox="0 0 1000 3000">
                  <path
                    fill="green"
                    fill-opacity="0"
                    stroke="blue"
                    stroke-opacity="0.8"
                    id="curve"
                    d="M 150 150 Q 450 150 350 200 Q 250 250 450 250 Q 700 250 550 300 Q 400 350 650 350 Q 800 350 750 400 "
                  />
                </svg> */}
              </div>

              {/*
                <button onClick={() => fullpageApi.moveSectionDown()}>
                <br />
                <span>Something | Something | Something</span><button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            */}
            </div>
            <div className="section">
              <div class="fp-bg" />
              <div className="background">
                <div className="about">
                  <div className="column">
                    <h1>About</h1>
                    <span style={{ fontSize: "2vh" }}>
                      Hi! My name is Mishall. I'm a freelance developer based in
                      the Bay Area. I'm currently a fullstack developer, and I
                      work with clients to build the apps, websites, and systems
                      they need.
                    </span>
                  </div>

                  <img
                    // className="column"
                    src={profileImage}
                    alt="mishroom"
                    style={{ maxWidth: "40%", maxHeight: "50%" }}
                  />
                </div>
              </div>
            </div>
            <div class="section" id="section1">
              <div class="fp-bg" style={{ padding: "8px" }} />
              <div className="background">
                <div class="slide" id="slide1" data-anchor="slide1">
                  <div class="intro">
                    <h1>Experience</h1>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent:'center',
                        alignItems:'center'
                      }}
                    >
                      <div class="col-lg-4 col-md-6">
                        <div class="featured-item style-5">
                          <div class="featured-icon">
                            <img
                              class="img-center"
                              src={Icons.Frontend}
                              alt=""
                            />
                          </div>
                          <div class="featured-title">
                            <h5>Frontend Development</h5>
                          </div>
                          <div class="featured-desc">
                            <p>
                              React
                              <br />
                              Redux
                              <br />
                              HTML+CSS
                              <br />
                              Flow
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-4 col-md-6 sm-mt-5">
                        <div class="featured-item style-5">
                          <div class="featured-icon">
                            <img class="img-center" src={Icons.Mobile} alt="" />
                          </div>
                          <div class="featured-title">
                            <h5>Mobile Development</h5>
                          </div>
                          <div class="featured-desc">
                            <p>
                              React Native
                              <br />
                              ExpoKit
                              <br />
                              {/* React Native Navigation
                                  <br /> */}
                              iOS App Store Deployment
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="featured-item style-5">
                          <div class="featured-icon">
                            <img
                              class="img-center"
                              src={Icons.Backend}
                              alt=""
                            />
                          </div>
                          <div class="featured-title">
                            <h5>Backend Development</h5>
                          </div>
                          <div class="featured-desc">
                            <p>
                              Node.js
                              <br />
                              Feathers.js
                              <br />
                              Flask
                              <br />
                              MongoDB
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 mt-5">
                        <div class="featured-item style-5">
                          <div class="featured-icon">
                            <img
                              class="img-center"
                              src={Icons.Languages}
                              alt=""
                            />
                          </div>
                          <div class="featured-title">
                            <h5>Languages</h5>
                          </div>
                          <div class="featured-desc">
                            <p>
                              JavaScript
                              <br />
                              Python
                              <br />
                              --
                              <br />
                              --
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 mt-5">
                        <div class="featured-item style-5">
                          <div class="featured-icon">
                            <img
                              class="img-center"
                              src={Icons.Services}
                              alt=""
                            />
                          </div>
                          <div class="featured-title">
                            <h5>Services</h5>
                          </div>
                          <div class="featured-desc">
                            <p>
                              Firebase
                              <br />
                              Segment.io
                              <br />
                              DataDog
                              <br />
                              --
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="slide" id="navtek" data-anchor="navtek">
                  <img
                    src={NavtekLogo}
                    alt="Navtek"
                    style={{
                      maxHeight: "15vh",
                      maxWidth: "50vw",
                      paddingBottom: "3em"
                    }}
                  />
                  <br />
                  <img
                    src={NavtekMockup}
                    alt="NavtekMockup"
                    style={{
                      maxHeight: "50vh",
                      maxWidth: "70vw",
                      paddingBottom: "3em"
                    }}
                  />
                  <br />
                  <h5>Custom Software Solution</h5>
                  <p>
                    An automation tool that streamlined telemedicine processes
                    with company-wide admin dashboards to manage daily
                    operations
                  </p>
                </div>
                <div class="slide" id="gist" data-anchor="gist">
                  <h1>
                    <a href="https://www.gistapp.co/">
                      {" "}
                      <img
                        src={GistLogo}
                        alt="Gist"
                        style={{
                          maxHeight: "20vh",
                          maxWidth: "50vw",
                          paddingBottom: "1.5em"
                        }}
                      />
                    </a>
                  </h1>

                  <h5>Mobile Development</h5>
                  <p>
                    A social e-commerce app that allows users to share product
                    reccomendations
                  </p>
                </div>
                <div class="slide" id="yosemite" data-anchor="yosemite">
                  <a href="https://yosemitelabs.com/">
                    <img
                      src={YLLogo}
                      alt="Yosemite Labs"
                      style={{
                        maxHeight: "15vh",
                        maxWidth: "50vw",
                        paddingBottom: "3em"
                      }}
                    />
                  </a>
                  <br />
                  <img
                    src={YLMockup}
                    alt="YLMockup"
                    style={{
                      maxHeight: "50vh",
                      maxWidth: "70vw",
                      paddingBottom: "3em"
                    }}
                  />
                  <br />
                  <h5>Founding Partner</h5>
                  <p>
                    We are seasoned startup engineers banded together by our
                    love of moving fast and building. We are interested in
                    learning about how technology can improve your business.
                  </p>
                </div>
                {/* <div class="slide" id="fmbm" data-anchor="fmbm">
                  <h1>For Makers, By Makers</h1>
                  <img
                    src={NavtekMockup}
                    alt="NavtekMockup"
                    style={{ maxWidth: "80vw", paddingBottom: "20px" }}
                  />
                  <br />
                  <h5>Consulting Team</h5>
                  <p>
                    For Makers by Makers, at its core, is a team of people who love to create. We make things for ourselves, at our homes and at the office. We create because our curiosity leaves us no choice.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="section">
              <div class="fp-bg" />
              <div className="background">
                <div className="project">
                  <h1>Have a project?</h1>
                  <p>
                    I'm always looking to take on new clients! Let's talk about
                    what your needs are, and how I can provide a solution to
                    your needs. <a href="/#contact">Contact me here</a>
                  </p>
                  <br />
                  <h1>Have a bigger project?</h1>
                  <p>
                    Even better! I'm a part of an incredible freelance team
                    consisting of a product manager, 3 backend and systems
                    engineers, and me!
                    <br />
                    We'll work together to scope out your project and deliver
                    high quality software.
                    <a href="https://yosemitelabs.com/"> Visit us here </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="section">
              <div class="fp-bg" />
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeTjiGpvzBvD8sF_zHUGISW-X2J46Nq4Beioktury_gVHBv3g/viewform?embedded=true"
                width="640"
                height="891"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading...
              </iframe>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
);
export default App;
