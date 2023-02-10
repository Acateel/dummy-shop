import { Fragment, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchUserCart } from "../../state/creators";
import { Cart } from "../../state/types";

const mapState = (state: RootState) => ({
  auth: state.auth,
  cart: state.cart[0],
});

const connector = connect(mapState, { fetchUserCart });

type PropsFromRedux = ConnectedProps<typeof connector>;

const CartProducts = (props: PropsFromRedux) => {
  const auth: any = props.auth;
  const cart: Cart = props.cart;

  useEffect(() => {
    if (auth) {
      props.fetchUserCart(auth.id);
    }
  }, []);

  const renderedProductsList = () => cart.products.map(product => (
    <div className="cart_product" key={product.id}>
        {product.title}
    </div>
  ))

  return (
    <Fragment>
        <h1>Cart</h1>
        {renderedProductsList()}
        <div className="cart_quality_block">
            <p>Total products: {cart.totalProducts}</p>
            <p>Total quantity: {cart.totalQuantity}</p>
        </div>
        <div className="cart_price_block">
            <p>Price: {cart.total}</p>
            <p>Total: {cart.discountedTotal}</p>
        </div>
    </Fragment>
  )
};

export default connector(CartProducts);
