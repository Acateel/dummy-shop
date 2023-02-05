import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchProducts } from "../../state/creators";
import { Fragment, useEffect } from "react";
import _ from "lodash";
import ProductCart from "./ProductCart";
import "./ProductsList.css";

const mapState = (state: RootState) => ({
  products: state.products,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProductsList = (props: PropsFromRedux) => {
  const renderedList = () =>
    Object.values(props.products).map((product) => (
      <ProductCart key={product.id} product={product} />
    ));

  return (
    <div className="products_list">
      {_.isEmpty(props.products) ? null : renderedList()}
    </div>
  );
};

export default connector(ProductsList);
