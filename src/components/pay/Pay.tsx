import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchUserCart, fetchUser } from "../../state/creators";
import { Cart, User } from "../../state/types";
import { useEffect } from "react";

const mapState = (state: RootState) => ({
  auth: state.auth,
  cart: state.cart[0],
  user: state.user,
});

const connector = connect(mapState, { fetchUserCart, fetchUser });

type PropsFromRedux = ConnectedProps<typeof connector>;

const Pay = (props: PropsFromRedux) => {
  const auth:any = props.auth;
  const cart : Cart = props.cart;
  const user : any = props.user;

  useEffect(() => {
    if(auth) {
        props.fetchUserCart(auth.id)
        props.fetchUser(auth.id)
    }
  }, [])

  return <h1>Pay page</h1>;
};

export default connector(Pay);
