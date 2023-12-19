import React from "react";
import { data } from "../data";

function Projects() {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h1>My works</h1>
      {data.map(item)=>{

      <div class="card" style={{ width: "18rem" }}>
        <img src={item.img} class="card-img-top" alt="..." />
      </div>
      }}
    </div>
  );
}

export default Projects;
