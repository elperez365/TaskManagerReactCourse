import classes from "./Input.module.css";
export default function Input({ typeInput, label, type, onChange, ...props }) {
  //if the type is text or textarea
  if (typeInput === "input") {
    return (
      <div>
        <label className={classes.label}>{label}</label>
        <input className={classes.input} onChange={onChange} type={type} {...props} />
      </div>
    );
  } else if (typeInput === "textarea") {
    return (
      <div>
        <label className={classes.label}>{label}</label>
        <textarea
          className={classes.textarea}
          onChange={onChange}
          {...props}
        ></textarea>
      </div>
    );
  } else {
    <>
      <p>Please sele a typeInput (input or textarea)</p>
    </>;
  }
}
