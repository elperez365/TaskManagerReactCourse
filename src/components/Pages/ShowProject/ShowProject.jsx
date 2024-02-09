import Input from "../../Reusable/Input/Input";
import classes from "./ShowProject..module.css";

export default function ShowProject({ title, description, dueDate, tasks }) {
  return (
    <div className={classes.show_container}>
      <div className={classes.show_header}>
        <h2>Project</h2>
        <button>Clear</button>
      </div>
      <div className={classes.show_body}>
        <p>Feb 22,2024</p>
        <p>Description for my project</p>
      </div>
      <hr />
      <div className={classes.input_area}>
        <Input typeInput="input" label="Task" type="text" />
        <button>Add Task</button>
      </div>
      <div className={classes.tasks}>
        <ul>
          <div className={classes.task}>
            <li>Task Number</li>
            <button>Clear</button>
          </div>
        </ul>
      </div>
    </div>
  );
}
