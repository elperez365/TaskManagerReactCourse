import FormProject from "../../Pages/FormProject/FormProject";
import classes from "./Outlet.module.css";
import logo from "../../../assets/logo/no-projects.webp";
import ShowProject from "../../Pages/ShowProject/ShowProject";
import { useRef } from "react";
import Button from "../../Reusable/Button/Button";

import Modal from "../../Reusable/Modal/Modal";
export default function Outlet(props) {
  const [store, setStore] = props.store;

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalRef = useRef();
  function saveProject() {
    if (
      title.current.value === "" ||
      description.current.value === "" ||
      dueDate.current.value === ""
    ) {
      modalRef.current.openModal();
      return;
    }
    let lastId = store.data.length - 1;
    let id = store.data[lastId].id + 1;
    const newProject = {
      id: id,
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      tasks: [""],
    };
    setStore((prev) => {
      return { ...prev, data: [...prev.data, newProject] };
    });
    setStore((prev) => {
      return { ...prev, isStart: "started" };
    });
  }
  switch (store.isStart) {
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
            <Button
              type="button"
              action="create"
              onClick={() =>
                setStore((prev) => {
                  return { ...prev, isStart: "FormProject" };
                })
              }
            >
              Create a new project
            </Button>
          </div>
        </div>
      );
      break;
    case "FormProject":
      return (
        <>
          <Modal ref={modalRef} />
          <div className={classes.container_form}>
            <div className={classes.button_container}>
              <Button
                action={"erase"}
                type={"button"}
                onClick={() =>
                  setStore((prev) => {
                    return { ...prev, isStart: "started" };
                  })
                }
              >
                Cancel
              </Button>
              <Button onClick={saveProject} action="create" type={"button"}>
                Save
              </Button>
            </div>
            <FormProject
              title={title}
              description={description}
              dueDate={dueDate}
            />
          </div>
        </>
      );
      break;
    case "ShowProject":
      return (
        <div className={classes.container}>
          <ShowProject
            projectTasks={props.projectTasks}
            storeState={[store, setStore]}
            title={store.selectedProject.title}
            description={store.selectedProject.description}
            dueDate={store.selectedProject.dueDate}
          />
        </div>
      );
      break;
    default:
      null;
      break;
  }
}
