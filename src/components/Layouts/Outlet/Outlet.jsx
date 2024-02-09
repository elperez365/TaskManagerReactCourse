import FormProject from "../../Pages/FormProject/FormProject";
import classes from "./Outlet.module.css";
import logo from "../../../assets/logo/no-projects.webp";
import { useState } from "react";
import ShowProject from "../../Pages/ShowProject/ShowProject";

export default function Outlet({ project }) {
  const [isStart, setIsStart] = useState(true);
  return (
    <>
      {!isStart && project === undefined ? (
        <div className={classes.container}>
          <div>
            <img
              src={logo}
              alt="tast manager logo"
              className={classes.img_responsive + " " + classes.img}
            />
            <h2 className={classes.title}>No Project Selected</h2>
            <p className={classes.paragraph}>
              Select a project or get started with a new one
            </p>
            <button onClick={() => setIsStart(true)}>
              Create a new project
            </button>
          </div>
        </div>
      ) : null}
      {isStart && project !== undefined ? (
        <div className={classes.container}>
          <ShowProject />
        </div>
      ) : null}
      {isStart && project === undefined ? (
        <div className={classes.container_form}>
          <div className={classes.button_container}>
            <button onClick={() => setIsStart(false)}>Cancel</button>
            <button>Save</button>
          </div>
          <FormProject />
        </div>
      ) : null}
    </>
  );
}
