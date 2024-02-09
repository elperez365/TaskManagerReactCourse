import Input from "../../Reusable/Input/Input";
import TaskList from "../../Layouts/TaskList/TaskList";
import Button from "../../Reusable/Button/Button"
import classes from "./ShowProject.module.css";

export default function ShowProject({ title, description, dueDate, tasks }) {
  return (
    <div className={classes.show_container}>
      
      <div className={classes.show_header}>
        <h2>{title}</h2>
        <Button type="button" action={"erase"}>Clear</Button>
      </div>

      <div className={classes.show_body}>
        <p>{dueDate}</p>
        <p>{description}</p>
      </div>
      
      <hr />
      
      <div className={classes.input_area}>
        <div className={classes.input_container}>
          <Input typeInput="input" label="Task" type="text" />
          <span>
            <Button type="button" action={"add"}>Add Task</Button>
          </span>
        </div>
        <TaskList tasks={tasks}/>
      </div>
      
    </div>
  );
}
