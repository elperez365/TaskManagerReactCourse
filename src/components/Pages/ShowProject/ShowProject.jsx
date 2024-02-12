import Input from "../../Reusable/Input/Input";
import TaskList from "../../Layouts/TaskList/Tasklist";
import Button from "../../Reusable/Button/Button";
import Modal from "../../Reusable/Modal/Modal";
import classes from "./ShowProject.module.css";
import { useRef } from "react";

export default function ShowProject({ storeState }) {
  const [store, setStore] = storeState;
  const inputRef = useRef();
  const dialog = useRef();

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

  const handleAddTask = () => {
    const inputValue = inputRef.current.value;

    if (inputValue.trim() === "") {
      dialog.current.openModal();
    } else {
      inputRef.current.value = "";
      let id;
      if (selectedProject.tasks.length <= 0) {
        id = 1;
      } else {
        id = selectedProject.tasks[selectedProject.tasks.length - 1].id + 1;
      }

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
    }
  };

  return (
    <>
      <Modal ref={dialog} />
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
    </>
  );
}
