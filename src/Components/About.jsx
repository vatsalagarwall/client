import React from "react";
import { useState } from "react";
function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  const renderContent = () => {
    switch (activeTab) {
      case "Skills":
        return (
          <div>
            <h3>Skills</h3>
            <p>React, JavaScript, HTML, CSS, etc.</p>
          </div>
        );
      case "Experience":
        return (
          <div>
            <h3>Experience</h3>
            <p>Web Developer at XYZ Company</p>
          </div>
        );

      case "Education":
        return (
          <div>
            <h3>Education</h3>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <div className="row h-100">
        {/* Left Column (Image) */}
        <div className="col-md-6 d-flex align-items-center">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Image"
            className="img-fluid"
            style={{
              width: "80%",
              height: "80%",
              marginLeft: "40px",
              marginRight: "40px",
            }}
          />
        </div>

        {/* Right Column (Text) */}
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, molestie ipsum et, consectetur justo. Integer
              tristique odio id elit tempus, vel malesuada est bibendum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, molestie ipsum et, consectetur justo. Integer
              tristique odio id elit tempus, vel malesuada est bibendum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, molestie ipsum et, consectetur justo. Integer
              tristique odio id elit tempus, vel malesuada est bibendum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, molestie ipsum et, consectetur justo. Integer
              tristique odio id elit tempus, vel malesuada est bibendum.
            </p>

            <ul className="nav nav-underline text-white">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "Skills" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Skills")}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "Experience" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Experience")}
                >
                  Experience
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "Education" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Experience")}
                >
                  Experience
                </a>
              </li>
            </ul>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
