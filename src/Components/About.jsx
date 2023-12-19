import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function About() {
  const [activeTab, setActiveTab] = useState("Education");

  const renderContent = () => {
    switch (activeTab) {
      case "Skills":
        return (
          <div className="text-white" style={{ marginTop: "10px" }}>
            <ul>
              <li>
                <span style={{ color: "red" }}>Technical Skills: </span> • C •
                C++ • Python • JavaScript • MERN stack
              </li>
              <li>
                <span style={{ color: "red" }}>Other Skills:</span> • Firebase •
                MySQL
              </li>
              <li>
                <span style={{ color: "red" }}>Coursework:</span> • Database
                Management Systems • Data Structures and Algorithms •
                Object-Oriented Programming • Operating Systems • Computer
                Network
              </li>
            </ul>
          </div>
        );
      case "Experience":
        return (
          <div className="text-white" style={{ marginTop: "10px" }}>
            <ul>
              <li>
                Web Development Intern at{" "}
                <Link
                  to="https://eplanetsoft.com/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  EPlanet Soft – EP SOFT Pvt. Ltd.
                </Link>
                <br />
                <span style={{ fontSize: "smaller", color: "red" }}>
                  Sep 2023 – Dec 2023
                </span>
              </li>
              <li>
                Member of Technical Team in Apple Developers Group
                <br />
                <span style={{ fontSize: "smaller", color: "red" }}>
                  Dec 2021 – present
                </span>
              </li>
            </ul>
          </div>
        );

      case "Education":
        return (
          <div className="text-white" style={{ marginTop: "10px" }}>
            <ul>
              <li>
                Vellore Institute of Technology, Vellore{" "}
                <span style={{ fontSize: "smaller" }}>
                  (B.Tech in Information Technology)
                </span>
                <br />
                <span
                  style={{
                    fontSize: "smaller",
                    color: "red",
                  }}
                >
                  Expected July 2025
                </span>
              </li>
              <li>
                Ryan International School, Jaipur{" "}
                <span style={{ fontSize: "smaller" }}>
                  (Secondary Education)
                </span>
                <br />
                <span
                  style={{
                    fontSize: "smaller",
                    color: "red",
                  }}
                >
                  2019-2020
                </span>
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="container-fluid text-white p-4"
      style={{ backgroundColor: "black" }}
    >
      <div className="row" style={{ marginTop: "60px", marginBottom: "60px" }}>
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Image"
            className="img-fluid"
            style={{
              width: "70%",
              height: "70%",
              marginLeft: "40px",
            }}
          />
        </div>

        <div className="col-md-6">
          <div style={{ marginRight: "70px" }}>
            <h2>About Me</h2>
            <p className="text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, molestie ipsum et, consectetur justo. Integer
              tristique odio id elit tempus, vel malesuada est bibendum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus
              feugiat, molestie ipsum et, consectetur justo. Integer tristique
              odio id elit tempus, vel malesuada est bibendum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, molestie ipsum et, consectetur justo. Integer
              tristique odio id elit tempus, vel malesuada est bibendum. Lorem
            </p>

            <ul className="nav nav-underline text-white">
              <li className="nav-item">
                <button
                  className={`nav-link text-white ${
                    activeTab === "Education" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Education")}
                  style={{
                    borderBottomColor:
                      activeTab === "Education" ? "red" : "transparent",
                  }}
                >
                  Education
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link text-white ${
                    activeTab === "Skills" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Skills")}
                  style={{
                    borderBottomColor:
                      activeTab === "Skills" ? "red" : "transparent",
                  }}
                >
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link text-white ${
                    activeTab === "Experience" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Experience")}
                  style={{
                    borderBottomColor:
                      activeTab === "Experience" ? "red" : "transparent",
                  }}
                >
                  Experience
                </button>
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
