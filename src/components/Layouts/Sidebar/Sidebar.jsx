import { DUMMYDATA } from "../../../data/mockData.js";
import { useState } from "react";
import Button from "../../Reusable/Button/Button";
import classes from "./Sidebar.module.css";

export default function Sidebar(props) {
  const [store, setstore] = props.store;
  return (
    <>
      <section className={classes.content}>
        <h3 className={classes.title}>Your Projects</h3>
        <Button type="button" action="create">
          + Add Project
        </Button>
        <section>
          {store.data.map((project) => (
            <ul key={project.id}>
              <li
                onClick={() =>
                  setstore((prevStore) => {
                    return {
                      ...prevStore,
                      projectSelected: project,
                      isStart: "ShowProject",
                    };
                  })
                }
              >
                {project.title}
              </li>
            </ul>
          ))}
        </section>
      </section>
    </>
  );
}
