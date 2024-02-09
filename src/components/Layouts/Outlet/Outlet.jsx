import FormProject from "../../Pages/FormProject/FormProject";
import classes from "./Outlet.module.css";
import logo from "../../../assets/logo/no-projects.webp";
import ShowProject from "../../Pages/ShowProject/ShowProject";
import { useRef, useState } from "react";
import Button from "../../Reusable/Button/Button";
import { DUMMYDATA } from "../../../data/mockData";
import Modal from "../../Reusable/Modal/Modal";
export default function Outlet(props) {
  const [store, setstore] = props.store;
  const [isStart, setIsStart] = useState("started");
  const [projects, setProjects] = useState(DUMMYDATA);
  console.log(projects);

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
    let lastId = projects.length - 1;
    let id = projects[lastId].id + 1;
    const newProject = {
      id: id,
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      tasks: [""],
    };
    setProjects([...projects, newProject]);
    setstore((prevStore) => {
      return { ...prevStore, isStart: "started" };
    });
  }
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
            <Button
              type="button"
              action="create"
              onClick={() => setIsStart("FormProject")}
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
                onClick={() => setIsStart("started")}
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
