import { Fragment } from "react";
import "./ShortCart.css";

const ShortCart = () => {
  return (
    <div className="short_cart">
      <img className="short_cart_icon" src="/short_cart_icon.png" />
      <p className="short_cart_count">99</p>
    </div>
  );
};

export default ShortCart;
