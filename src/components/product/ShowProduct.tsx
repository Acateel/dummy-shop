import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../state/store";
import { fetchProduct } from "../../state/creators";
import { Fragment, useEffect } from "react";
import "./ShowProduct.css";
import ImageView from "./ImageView";

const mapState = (state: RootState) => ({
  products: state.products,
});

const connector = connect(mapState, { fetchProduct });

type PropsFromRedux = ConnectedProps<typeof connector>;

const ShowProduct = (props: PropsFromRedux) => {
  const params = useParams();
  const id = +(params.id ?? 0);

  useEffect(() => {
    props.fetchProduct(id);
  }, []);

  const product = props.products[id];

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
          <p className="show_product_price">{product.price}$</p>
          <button className="show_product_buy"><img src="/buy_cart_icon.png"/> Buy</button>
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
