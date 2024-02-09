import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Modal = forwardRef(function Modal({ props }, ref) {
  const modalRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      openModal() {
        modalRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog open className={classes.result_modal}>
      <h3>Invalid Input</h3>
      <p>Oops... looks like you forgot to enter a value</p>
      <p>Please make sure you provide a valid value for every input field</p>
      <form method="dialog">
        <button>Okay</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
