import { MouseEventHandler, ReactElement } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

type Props = {
  title: string;
  content: string;
  actions: JSX.Element;
  onDismiss: MouseEventHandler<HTMLDivElement>;
};

const Modal = (props: Props) => {
  return createPortal(
    <div onClick={props.onDismiss} className="modal">
      <div className="modal_form" onClick={(e) => e.stopPropagation()}>
        <h1 className="modal_header">{props.title}</h1>
        <p className="modal_content">{props.content}</p>
        <div className="modal_action">{props.actions}</div>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
