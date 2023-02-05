import { connect, ConnectedProps } from "react-redux";
import ProductsList from "./ProductsList";
import { fetchProducts } from "../../state/creators";
import { useEffect } from "react";

const connector = connect(null, { fetchProducts });

type PropsFromRedux = ConnectedProps<typeof connector>;

const AllProducts = (props: PropsFromRedux) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);
  return <ProductsList />;
};

export default connector(AllProducts);
