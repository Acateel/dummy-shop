import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";

const Logout = () => {
  const navigate = useNavigate();

  const onDismiss = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <h1>Logout</h1>
      <Modal
        title="Logout?"
        content="Are you logout now?"
        actions={<button></button>}
        onDismiss={onDismiss}
      />
    </Fragment>
  );
};

export default Logout;
