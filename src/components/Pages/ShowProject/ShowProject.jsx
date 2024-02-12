import Input from "../../Reusable/Input/Input";
import TaskList from "../../Layouts/TaskList/Tasklist";
import Button from "../../Reusable/Button/Button";
import classes from "./ShowProject.module.css";
import { useRef } from "react";
import Modal from "../../Reusable/Modal/Modal";

export default function ShowProject({ storeState }) {
  const [store, setStore] = storeState;

  const selectedProject = store.data.find(
    (project) => project.id === store.selectedProject
  );

  const handleDeleteProject = () => {
    setStore((prev) => {
      return {
        ...prev,
        isStart: "started",
        selectedProject: null,
        data: prev.data.filter(
          (project) => project.title !== selectedProject.title
        ),
      };
    });
  };
  const inputRef = useRef();
  const modalRef = useRef();

  const handleAddTask = () => {
    if (inputRef.current.value === "") {
      modalRef.current.openModal();
      return;
    }
    const lastTaskIndex = selectedProject.tasks.length - 1;
    let id;
    if (lastTaskIndex <= 0) {
      id = 1;
    } else id = selectedProject.tasks[lastTaskIndex].id + 1;

    const inputValue = inputRef.current.value;
    inputRef.current.value = "";
    setStore((prev) => {
      return {
        ...prev,

        data: prev.data.map((project) => {
          if (project.title === selectedProject.title) {
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
        <h2>{selectedProject.title}</h2>
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
          {new Date(selectedProject.dueDate).toLocaleDateString("en", {
            // weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p>{selectedProject.description}</p>
      </div>

      <hr />

      <div className={classes.input_area}>
        <Modal ref={modalRef} />
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
        <TaskList
          selectedProject={selectedProject}
          storeState={[store, setStore]}
        />
      </div>
    </div>
  );
}
