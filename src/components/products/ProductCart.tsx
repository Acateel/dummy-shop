import { Link } from "react-router-dom";
import { Product } from "../../state/types";
import "./ProductCart.css";

type Props = { product: Product };

const ProductCart = ({ product }: Props) => {
  return (
    <div className="product_cart">
      <Link className="product_cart_link" to={`/product/${product.id}`}>
        <img
          className="product_cart_img"
          src={product.thumbnail}
          alt={product.title}
        />
      </Link>
      <Link className="product_cart_link" to={`/product/${product.id}`}>
        <h1 className="product_cart_name">{product.title}</h1>
      </Link>
      <h2 className="product_cart_price_space">
        <span className="product_cart_price">{product.price}$</span>
        <span className="product_cart_discont">
          {product.discountPercentage}%
        </span>
      </h2>
    </div>
  );
};

export default ProductCart;
