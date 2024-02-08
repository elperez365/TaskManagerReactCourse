import { DUMMYDATA } from "../../../data/mockData.js";
import { useState } from "react";

export default function Sidebar() {
  return (
    <>
      <h3>Your Projects</h3>
      <div className="content">
        <button>+ Add Project</button>
        <section>
          {DUMMYDATA.map((project) => (
            <ul key={project.id}>
              <li>{project.title}</li>
            </ul>
          ))}
        </section>
      </div>
    </>
  );
}
