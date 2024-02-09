import classes from "./TaskList.module.css";
import Button from "../../Reusable/Button/Button.jsx";

const TaskList = ({ tasks, storeState }) => {
  const [store, setStore] = storeState;

  const handleDeleteTask = (taskTitle) => {
    setStore((prev) => {
      return {
        ...prev,

        data: prev.data.map((project) => {
          if (project.title === store.selectedProject.title) {
            return {
              ...project,
              tasks: project.tasks.filter((task) => taskTitle !== task),
            };
          }
          return project;
        }),
      };
    });
  };

  return (
    <div className={classes.tasks}>
      <ul>
        {tasks.map((task, index) => (
          <div key={index} className={classes.task}>
            <li>{task}</li>
            <Button
              onClick={() => handleDeleteTask(task)}
              type="button"
              action={"erase"}
            >
              Clear
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
