import React, { useState } from "react";
import { data } from "../data";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div style={{ marginLeft: "70px" }}>
        <h1>My works</h1>
        <div style={{ marginTop: "60px" }}>
          <div className="row" style={{ margin: 0 }}>
            {data.map((item, index) => (
              <div
                key={index}
                className="col-md-4"
                style={{ padding: 0, position: "relative" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="card"
                  style={{
                    width: "18rem",
                    margin: "10px",
                    position: "relative",
                  }}
                >
                  <img src={item.img} className="card-img-top" alt="..." />
                  {hoveredIndex === index && (
                    <div
                      className="overlay"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      {/* Additional information to display */}
                      <p>{item.name}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
