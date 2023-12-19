import React, { useState } from "react";
import { data } from "../data";
import { Link } from "react-router-dom";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div
        className="container"
        style={{ marginTop: "60px", marginBottom: "60px" }}
      >
        <h1>My works</h1>
        <div className="row">
          {data.map((item, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-6 col-lg-4"
              style={{ padding: "10px", position: "relative" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="card"
                style={{
                  width: "100%",
                  margin: "0",
                  position: "relative",
                }}
              >
                <img
                  src={item.img}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "400px" }}
                />
                {hoveredIndex === index && (
                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    {/* Additional information to display */}
                    <p>{item.name}</p>
                    <p style={{ margin: "30px" }}>{item.description}</p>
                    <Link
                      to={item.link}
                      target="_blank"
                      style={{ color: "white" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-external-link"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" x2="21" y1="14" y2="3" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
