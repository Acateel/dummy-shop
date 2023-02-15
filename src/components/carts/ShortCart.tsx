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
  unregCart: state.unregCart,
});

const connector = connect(mapState, { fetchUserCart });

type PropsFromRedux = ConnectedProps<typeof connector>;

const ShortCart = (props: PropsFromRedux) => {
  const auth: any = props.auth;
  const isLogged: boolean = _.hasIn(auth, "id");
  const cart: Cart = props.cart;

  useEffect(() => {
    if (isLogged) {
      props.fetchUserCart(auth.id);
    }
  }, [auth]);

  const renderedQuantity = () => {
    if (_.hasIn(cart, "totalQuantity") && isLogged) {
      return <p className="short_cart_count">{cart.totalQuantity}</p>;
    }
    if (props.unregCart.products.length > 0) {
      return (
        <p className="short_cart_count">{props.unregCart.products.length}</p>
      );
    }
    return null;
  };

  return (
    <div className="short_cart">
      <img className="short_cart_icon" src="/short_cart_icon.png" />
      {renderedQuantity()}
    </div>
  );
};

export default connector(ShortCart);
