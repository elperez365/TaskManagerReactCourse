

import Button from "../../Reusable/Button/Button";
import classes from "./Sidebar.module.css";
import ProjectList from "../ProjectList/ProjectList.jsx";

export default function Sidebar(props) {
  const [store, setStore] = props.store;
  return (
    <>
      <section className={classes.content}>
        <h3 className={classes.title}>Your Projects</h3>
        <Button
          onClick={() =>
            setStore((prev) => {
              return { ...prev, isStart: "FormProject" };
            })
          }
          type="button"
          action="create"
        >
          + Add Project
        </Button>
        <div>
          <ProjectList store={[store, setStore]}></ProjectList>
        </div>
      </section>
    </>
  );
}
