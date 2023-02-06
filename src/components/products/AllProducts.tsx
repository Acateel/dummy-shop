import { connect, ConnectedProps } from "react-redux";
import ProductsList from "./ProductsList";
import { fetchProducts } from "../../state/creators";
import { Fragment, useEffect } from "react";

const connector = connect(null, { fetchProducts });

type PropsFromRedux = ConnectedProps<typeof connector>;

const AllProducts = (props: PropsFromRedux) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);
  return (
    <Fragment>
      <h1>Product List</h1>
      <ProductsList />
    </Fragment>
  );
};

export default connector(AllProducts);