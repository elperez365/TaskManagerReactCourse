import { forwardRef } from "react";
import classes from "./Input.module.css";
const Input = forwardRef (function Input({ typeInput, label, type, ...props },ref) {
  //if the type is text or textarea
  if (typeInput === "input") {
    return (
      <div>
        <label className={classes.label}>{label}</label>
        <input ref={ref} className={classes.input} type={type} {...props} />
      </div>
    );
  } else if (typeInput === "textarea") {
    return (
      <div>
        <label className={classes.label}>{label}</label>
        <textarea
        ref={ref}
          className={classes.textarea}
          {...props}
        ></textarea>
      </div>
    );
  } else {
    <>
      <p>Please sele a typeInput (input or textarea)</p>
    </>;
  }
})

export default Input;