import classes from "./TaskList.module.css";
import Button from "../../Reusable/Button/Button.jsx";

const TaskList = ({ storeState, projectTasks }) => {
  const [store, setStore] = storeState;

  const handleDeleteTask = (taskTitle) => {
    setStore((prev) => {
      return {
        ...prev,

        data: prev.data.map((project) => {
          if (project.title === prev.selectedProject.title) {
            return {
              ...project,
              tasks: project.tasks.filter((task) => task.title !== taskTitle),
            };
          }
          return project;
        }),
      };
    });
  };
  console.log(store);

  return (
    <div className={classes.tasks}>
      <ul>
        {projectTasks.map((task) => (
          <div key={task.id + task.title} className={classes.task}>
            <li>{task.title}</li>
            <Button
              onClick={() => handleDeleteTask(task.title)}
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
