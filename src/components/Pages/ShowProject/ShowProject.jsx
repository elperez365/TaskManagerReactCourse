import Input from "../../Reusable/Input/Input";
import TaskList from "../../Layouts/TaskList/Tasklist";
import Button from "../../Reusable/Button/Button";
import classes from "./ShowProject.module.css";
import { useRef } from "react";

export default function ShowProject({
  title,
  description,
  dueDate,

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
  const inputRef = useRef();

  const handleAddTask = () => {
    const id = Math.random().toFixed(2);
    const inputValue = inputRef.current.value;
    inputRef.current.value = "";
    setStore((prev) => {
      return {
        ...prev,
        selectedProject: {
          ...prev.selectedProject,
          tasks: [
            ...prev.selectedProject.tasks,
            {
              id: id,
              title: inputValue,
            },
          ],
        },
        data: prev.data.map((project) => {
          if (project.title === title) {
            return {
              ...project,
              tasks: [
                ...project.tasks,
                {
                  id: id,
                  title: inputValue,
                },
              ],
            };
          }
          return project;
        }),
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
        <p>
          {new Date(dueDate).toLocaleDateString("en", {
            // weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p>{description}</p>
      </div>

      <hr />

      <div className={classes.input_area}>
        <div className={classes.input_container}>
          <Input ref={inputRef} typeInput="input" label="Task" type="text" />
          <span>
            <Button
              onClick={() => handleAddTask()}
              type="button"
              action={"add"}
            >
              Add Task
            </Button>
          </span>
        </div>
        <TaskList storeState={[store, setStore]} />
      </div>
    </div>
  );
}
