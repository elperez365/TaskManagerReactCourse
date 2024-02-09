import classes from "./TaskList.module.css";
import Button from "../../Reusable/Button/Button.jsx";

const TaskList = ({tasks}) => {
  return ( 
    <div className={classes.tasks}>
      <ul>
        {tasks.map((task, index) => (
          <div key={index} className={classes.task}>
            <li>{task}</li>
            <Button type="button" action={"erase"}>Clear</Button>
          </div>
        ))}
      </ul>
    </div>
    );
}

export default TaskList