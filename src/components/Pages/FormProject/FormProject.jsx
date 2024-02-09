import { forwardRef } from "react";
import Input from "../../Reusable/Input/Input";
import classes from "./FormProject.module.css";

const FormProject = forwardRef(function FormProject({ title, description, dueDate },ref) {
  return (
    <div className={classes.form}>
      <Input
      ref={title}
        typeInput="input"
        label="Title"
        type="text"
        placeholder="Project Title"
      />
      <Input
      ref={description}
        typeInput="textarea"
        label="description"
        type="text"
        placeholder="Description for my project"
      />
      <Input ref={dueDate} typeInput="input" label="due date" type="date" />
    </div>
  );
})

export default FormProject;