import Button from "../../Reusable/Button/Button";
import classes from "./Sidebar.module.css";
import ProjectList from "../ProjectList/ProjectList.jsx";
import { useEffect } from "react";
import { useState } from "react";

export default function Sidebar(props) {
  const [store, setStore] = props.store;

  // salva la risoluzione dello schermo in uno state
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <>
      <section className={classes.content}>
        {width > 600 ? (
          <h3 className={classes.title}>Your Projects</h3>
        ) : (
          <h5 className={classes.title}>Projects</h5>
        )}

        <Button
          onClick={() =>
            setStore((prev) => {
              return { ...prev, isStart: "FormProject" };
            })
          }
          type="button"
          action="create"
        >
          {width > 600 ? " + Add Project" : "+"}
        </Button>
        <div>
          <ProjectList store={[store, setStore]}></ProjectList>
        </div>
      </section>
    </>
  );
}
