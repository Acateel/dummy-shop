import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { searchProducts } from "../../state/creators";
import ProductsList from "../products/ProductsList";

const connector = connect(null, { searchProducts });

type PropsFromRedux = ConnectedProps<typeof connector>;

const SearchProducts = (props: PropsFromRedux) => {
  const { state } = useLocation();

  useEffect(() => {
    props.searchProducts(state);
  }, []);

  return (
    <Fragment>
      <h1>Search</h1>
      <ProductsList />
    </Fragment>
  );
};

export default connector(SearchProducts);
