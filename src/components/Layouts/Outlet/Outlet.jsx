import FormProject from "../../Pages/FormProject/FormProject";
import classes from "./Outlet.module.css";
import logo from "../../../assets/logo/no-projects.webp";
import ShowProject from "../../Pages/ShowProject/ShowProject";
import { useState } from "react";

export default function Outlet( props ) {
  const [isStart, setIsStart] = useState("ShowProject");
  switch (isStart) {
    case "started":
      return (
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
            <button onClick={() => setIsStart("FormProject")}>
              Create a new project
            </button>
          </div>
        </div>
      );
      break;
    case "FormProject":
      return (
        <div className={classes.container_form}>
          <div className={classes.button_container}>
            <button onClick={() => setIsStart("started")}>Cancel</button>
            <button>Save</button>
          </div>
          <FormProject />
        </div>
      );
      break;
    case "ShowProject":
      return (
        <div className={classes.container}>
          <ShowProject
            title={"title"}
            description={"desc"}
            dueDate={"22/02/2022"}
            tasks={["task1", "task2", "task3"]}
          />
        </div>
      );
      break;
    default:
      null;
      break;
  }
}
