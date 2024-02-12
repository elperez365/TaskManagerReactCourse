import FormProject from "../../Pages/FormProject/FormProject";
import classes from "./Outlet.module.css";
import ShowProject from "../../Pages/ShowProject/ShowProject";
import NoProject from "../../Pages/NoProject/NoProject";
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
      return { ...prev, data: [newProject, ...prev.data] };
    });
    setStore((prev) => {
      return { ...prev, isStart: "started" };
    });
  }
  switch (store.isStart) {
    case "started":
      return (
        <div className={classes.container}>
          <div className={classes.noProjectContainer}>
            <NoProject />
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

          <div className={classes.form_container}>
            <div className={classes.form_sub_container}>
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
          </div>
        </>
      );
      break;
    case "ShowProject":
      return (
        <div className={classes.container}>
          <ShowProject storeState={[store, setStore]} />
        </div>
      );
      break;
    default:
      null;
      break;
  }
}
