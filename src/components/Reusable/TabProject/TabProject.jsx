import Button from "../Button/Button";

const TabProject = (props) => {
  const setStore = props.setStore;
  return (
    <li>
      <Button
        onClick={() =>
          setStore((prev) => {
            return {
              ...prev,
              selectedProject: props.project,
              isStart: "ShowProject",
            };
          })
        }
        action="create"
        type="button"
      >
        {props.project.title}
      </Button>
    </li>
  );
};

export default TabProject;
