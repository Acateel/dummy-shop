import { connect, ConnectedProps } from "react-redux";
import _ from "lodash";
import { RootState } from "../../state/store";
import { fetchUserCart } from "../../state/creators";
import "./ShortCart.css";
import { useEffect } from "react";
import { Cart } from "../../state/types";

const mapState = (state: RootState) => ({
  auth: state.auth,
  cart: state.cart[0],
});

const connector = connect(mapState, { fetchUserCart });

type PropsFromRedux = ConnectedProps<typeof connector>;

const ShortCart = (props: PropsFromRedux) => {
  const auth: any = props.auth;
  const cart: Cart = props.cart;

  useEffect(() => {
    if (auth) {
      props.fetchUserCart(auth.id);
    }
  }, []);

  return (
    <div className="short_cart">
      <img className="short_cart_icon" src="/short_cart_icon.png" />
      {cart && <p className="short_cart_count">{cart.totalQuantity}</p>}
    </div>
  );
};

export default connector(ShortCart);
