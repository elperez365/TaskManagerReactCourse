import classes from "./TaskList.module.css";
import Button from "../../Reusable/Button/Button.jsx";

const TaskList = ({ storeState, selectedProject }) => {
  const [store, setStore] = storeState;

  const handleDeleteTask = (taskId) => {
    setStore((prev) => {
      return {
        ...prev,

        data: prev.data.map((project) => {
          if (project.title === selectedProject.title) {
            return {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            };
          }
          return project;
        }),
      };
    });
  };

  const selectedProjectDataTask = selectedProject.tasks;

  return (
    <div className={classes.tasks}>
      <ul>
        {selectedProjectDataTask.length > 0 ? (
          selectedProjectDataTask.map((task) => (
            <div key={task.id + task.title} className={classes.task}>
              <li>{task.title}</li>
              <Button
                onClick={() => handleDeleteTask(task.id)}
                type="button"
                action={"erase"}
              >
                Clear
              </Button>
            </div>
          ))
        ) : (
          <p> This project does not have any tasks yet. </p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
