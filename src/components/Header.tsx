import _ from "lodash";
import { Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import { RootState } from "../state/store";
import SearchForm from "./search/SearchForm";
import ShortCart from "./carts/ShortCart";
import { AuthUser } from "../state/types";
import "./Header.css";

const mapState = (state: RootState) => ({
  auth: state.auth,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Header = (props: PropsFromRedux) => {
  const isLogged: boolean =
    !_.isEmpty(props.auth) && !_.hasIn(props.auth, "error");

  const renderedLeftHeader = () => {
    const user: AuthUser = props.auth;
    return (
      <Fragment>
        <Link className="nav_link" to="/">
          {user.firstName} {user.lastName}
        </Link>
        <Link className="nav_link" to="/logout">
          Logout
        </Link>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <header>
        <div className="header_left">
          <Link to="/" className="nav_link">
            Products
          </Link>
          <Link to="/categories" className="nav_link">
            Categories
          </Link>
          <div className="nav_link">
            <SearchForm />
          </div>
        </div>
        <div className="header_right">
          <Link className="nav_link" to="/cart">
            <ShortCart />
          </Link>
          {isLogged ? (
            renderedLeftHeader()
          ) : (
            <Link to="/login" className="nav_link">
              Login
            </Link>
          )}
        </div>
      </header>
      <div className="content">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default connector(Header);
