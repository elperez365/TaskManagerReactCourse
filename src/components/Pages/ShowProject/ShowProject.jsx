import Input from "../../Reusable/Input/Input";
import classes from "./ShowProject..module.css";

export default function ShowProject({ title, description, dueDate, tasks }) {
  return (
    <div className={classes.show_container}>
      <div className={classes.show_header}>
        <h2>{title}</h2>
        <button>Clear</button>
      </div>
      <div className={classes.show_body}>
        <p>{dueDate}</p>
        <p>{description}</p>
      </div>
      <hr />
      <div className={classes.input_area}>
        <Input typeInput="input" label="Task" type="text" />
        <button>Add Task</button>
      </div>
      <div className={classes.tasks}>
        <ul>
          {tasks.map((task,index) => (
            <div key={index} className={classes.task}>
              <li>{task}</li>
              <button>Clear</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
