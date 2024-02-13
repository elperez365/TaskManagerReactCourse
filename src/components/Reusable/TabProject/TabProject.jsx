import Button from "../Button/Button";
import classes from "./TabProject.module.css";

const TabProject = (props) => {
  const setStore = props.setStore;
  return (
    <li>
      <Button
        onClick={() =>
          setStore((prev) => {
            return {
              ...prev,
              selectedProject: props.project.id,
              isStart: "ShowProject",
            };
          })
        }
        action="project"
        type="button"
      >
        {props.project.title}
      </Button>
    </li>
  );
};

export default TabProject;
