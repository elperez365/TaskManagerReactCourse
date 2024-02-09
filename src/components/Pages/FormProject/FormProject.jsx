import Input from "../../Reusable/Input/Input";
import classes from "./FormProject.module.css";

export default function FormProject() {
  return (
    <div className={classes.form}>
      <Input
        typeInput="input"
        label="Title"
        type="text"
        placeholder="Project Title"
      />
      <Input
        typeInput="textarea"
        label="description"
        type="text"
        placeholder="Description for my project"
      />
      <Input typeInput="input" label="due date" type="date" />
    </div>
  );
}
