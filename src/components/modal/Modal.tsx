import { ReactElement } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

type Props = {
  title: string;
  content: string;
  actions: ReactElement;
  onDismiss: Function;
};

const Modal = (props: Props) => {
  return createPortal(
    <div className="modal">Modal</div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
