import _ from "lodash";
import { FormEvent, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Navigate } from "react-router-dom";

import { loginAuthUser } from "../../state/creators";
import { RootState } from "../../state/store";
import "./Login.css";

const mapState = (state: RootState) => ({
  auth: state.auth,
});

const connector = connect(mapState, { loginAuthUser });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Login = (props: PropsFromRedux) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.loginAuthUser(username, password);
  };

  const isLogged: boolean =
    !_.isEmpty(props.auth) && !_.hasIn(props.auth, "error");

  if (isLogged) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <form className="login" onSubmit={onFormSubmit}>
      <label>Username</label>
      <br />
      <input
        type="text"
        placeholder="Enter username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        type="password"
        placeholder="Enter password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
      {_.hasIn(props.auth, "error") && (
        <p className="login_error">User dont found</p>
      )}
    </form>
  );
};

export default connector(Login);
