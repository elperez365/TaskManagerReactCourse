import classes from "./NoProject.module.css";
import logo from "../../../assets/logo/no-projects.webp";

function NoProject() {
  return (
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
    </div>
  )
}

export default NoProject