import { Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import _ from "lodash";
import { RootState } from "../state/store";
import "./Header.css";
import SearchForm from "./search/SearchForm";

const mapState = (state: RootState) => ({
  auth: state.auth,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Header = (props: PropsFromRedux) => {
  const isLogged: boolean =
    !_.isEmpty(props.auth) && !_.hasIn(props.auth, "error");

  const renderedLeftHeader = (user: any) => {
    return (
      <Fragment>
        <Link className="nav_link" to="/">
          {user.firstName} {user.lastName}
        </Link>
        <Link className="nav_link" to="/">
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
        <div>
          {isLogged ? (
            renderedLeftHeader(props.auth)
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
