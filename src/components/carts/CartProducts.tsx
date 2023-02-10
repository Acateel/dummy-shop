import { Fragment, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchUserCart } from "../../state/creators";
import { Cart } from "../../state/types";
import "./CartProducts.css";
import { Link } from "react-router-dom";

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

  const renderedProductsList = () =>
    cart.products.map((product) => (
      <div className="cart_product" key={product.id}>
        <Link to={`/product/${product.id}`} className="cart_product_title">
          <h1>
            {product.title}
            <span className="cart_product_id">Id: {product.id}</span>
          </h1>
        </Link>
        <section className="cart_product_price">
          Price: <span>{product.price}$</span>
          Quality: <span>{product.quantity}</span>
        </section>
        <section className="cart_product_total">
          Total:
          <span className="total">{product.total}$</span>
          <span className="discont">-{product.discountPercentage}%</span>
          <span className="price">{product.discountedPrice}$</span>
        </section>
      </div>
    ));

  if(typeof cart === "undefined") {
    return <h1>You dont buy anything</h1>
  }

  return (
    <Fragment>
      <div className="cart_title">
        <img className="short_cart_icon" src="/short_cart_icon.png" />
        <h1>Cart</h1>
      </div>

      <div className="cart_products_list">{renderedProductsList()}</div>

      <div className="cart_product_fotter">
        <div className="cart_quality_block">
          <p>Total products: {cart.totalProducts}</p>
          <p>Total quantity: {cart.totalQuantity}</p>
        </div>
        <div className="cart_price_block">
          <div>
            <p>
              Price:{" "}
              <span className="cart_price_block_price">{cart.total}$</span>
            </p>
            <p>
              Total:{" "}
              <span className="cart_price_block_total">
                {cart.discountedTotal}$
              </span>
            </p>
          </div>
          <button className="cart_buy_button">
            <img src="/buy_cart_icon.png" /> Buy
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default connector(CartProducts);
