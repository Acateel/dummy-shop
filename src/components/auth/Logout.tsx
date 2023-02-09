import { Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import { logoutAuthUser } from "../../state/creators";

const connector = connect(null, { logoutAuthUser });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Logout = (props: PropsFromRedux) => {
  const navigate = useNavigate();

  const onLogout = () => {
    props.logoutAuthUser();
    navigate("/");
  };

  const onDismiss = () => {
    navigate("/");
  };

  const actions = (
    <Fragment>
      <button onClick={onLogout} className="modal_logout_button">
        Logout
      </button>
      <button onClick={onDismiss} className="modal_dismiss_button">
        Cancel
      </button>
    </Fragment>
  );

  return (
    <Fragment>
      <h1>Logout</h1>
      <Modal
        title="Logout?"
        content="Are you logout now?"
        actions={actions}
        onDismiss={onDismiss}
      />
    </Fragment>
  );
};

export default connector(Logout);
