import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Contact() {
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
          <h2>Contact Me</h2>
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
        </div>

        <div className="col-md-6">
          <div style={{ marginRight: "70px" }}>
            <h2>Contact Me</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
