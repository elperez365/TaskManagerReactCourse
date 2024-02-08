import classes from "./Input.module.css";
export default function Input({ typeInput, label, type, ...props }) {
  //if the type is text or textarea
  if (typeInput === "input") {
    return (
      <>
        <label className={classes.label}>{label}</label>
        <input className={classes.input} type={type} {...props} />
      </>
    );
  } else if (typeInput === "textarea") {
    return (
      <>
        <label className={classes.label}>{label}</label>
        <textarea className={classes.textarea} {...props}></textarea>
      </>
    );
  } else {
    <>
      <p>Please sele a typeInput (input or textarea)</p>
    </>;
  }
}
