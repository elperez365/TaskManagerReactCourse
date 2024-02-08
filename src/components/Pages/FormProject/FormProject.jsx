import Input from "../../Reusable/Input/Input";
import classes from "./FormProject.module.css";

export default function FormProject() {
  return (
    <div className={classes.form}>
      <Input typeInput="input" label="Title" type="text" />
      <Input typeInput="textarea" label="Title" type="text" />
      <Input typeInput="input" label="Title" type="date" />
    </div>
  );
}
