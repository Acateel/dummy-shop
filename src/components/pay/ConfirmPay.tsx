import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";

const ConfirmPay = () => {
  const navigate = useNavigate();

  const onDismiss = () => {
    navigate("/");
  };

  const actions = (
    <Fragment>
      <button onClick={onDismiss} className="modal_dismiss_button">
        Return to main page
      </button>
    </Fragment>
  );

  return (
    <Fragment>
      <h1>Confirm</h1>
      <Modal
        title="Confirm"
        content="Purchase confirmed. Wait for payment confirmation."
        actions={actions}
        onDismiss={onDismiss}
      />
    </Fragment>
  );
};

export default ConfirmPay;
