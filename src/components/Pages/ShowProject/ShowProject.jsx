import Input from "../../Reusable/Input/Input";
import TaskList from "../../Layouts/TaskList/Tasklist";
import Button from "../../Reusable/Button/Button";
import classes from "./ShowProject.module.css";

export default function ShowProject({
  title,
  description,
  dueDate,
  tasks,
  storeState,
}) {
  const [store, setStore] = storeState;
  const handleDeleteProject = () => {
    setStore((prev) => {
      return {
        ...prev,
        isStart: "started",
        selectedProject: null,
        data: prev.data.filter((project) => project.title !== title),
      };
    });
  };

  return (
    <div className={classes.show_container}>
      <div className={classes.show_header}>
        <h2>{title}</h2>
        <Button
          onClick={() => handleDeleteProject()}
          type="button"
          action={"erase"}
        >
          Delete
        </Button>
      </div>

      <div className={classes.show_body}>
        <p>{dueDate}</p>
        <p>{description}</p>
      </div>

      <hr />

      <div className={classes.input_area}>
        <div className={classes.input_container}>
          <Input typeInput="input" label="Task" type="text" />
          <span>
            <Button type="button" action={"add"}>
              Add Task
            </Button>
          </span>
        </div>
        <TaskList storeState={[store, setStore]} tasks={tasks} />
      </div>
    </div>
  );
}
