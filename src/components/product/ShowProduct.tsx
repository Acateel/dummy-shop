import { Fragment, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";

import { RootState } from "../../state/store";
import { fetchProduct, addIntoCart } from "../../state/creators";
import ImageView from "./ImageView";
import "./ShowProduct.css";

const mapState = (state: RootState) => ({
  products: state.products,
});

const connector = connect(mapState, { fetchProduct, addIntoCart });

type PropsFromRedux = ConnectedProps<typeof connector>;

const ShowProduct = (props: PropsFromRedux) => {
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const id = +(params.id ?? 0);

  useEffect(() => {
    props.fetchProduct(id);
  }, []);

  const product = props.products[id];

  const onBuyProduct = () => {
    props.addIntoCart(product.id, quantity);
  };

  const increment = () => {
    if (product.stock > quantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const renderedProduct = () => (
    <div className="show_product">
      <div className="show_product_title">
        <h1>{product.title}</h1>
        <h1>{product.rating}/5.00</h1>
      </div>
      <div className="show_product_grid">
        <ImageView images={product.images} />
        <div className="show_product_price_section">
          <div className="show_product_discont_box">
            <p className="show_product_discount">
              {product.discountPercentage}%
            </p>
            <p className="show_product_stosk">Stock: {product.stock}</p>
          </div>
          <p className="show_product_price">{product.price * quantity}$</p>
          <div className="show_product_buy_block">
            <button className="show_product_buy" onClick={onBuyProduct}>
              <img src="/buy_cart_icon.png" /> Buy
            </button>
            <div className="show_product_quntity_block">
              <button onClick={decrement}>-</button>
              <h2>{quantity}</h2>
              <button onClick={increment}>+</button>
            </div>
          </div>
        </div>
      </div>
      <p className="show_product_description">{product.description}</p>
    </div>
  );

  return (
    <Fragment>{product ? renderedProduct() : <h1>Loading...</h1>}</Fragment>
  );
};

export default connector(ShowProduct);
