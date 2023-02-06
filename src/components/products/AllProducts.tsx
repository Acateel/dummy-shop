import { connect, ConnectedProps } from "react-redux";
import ProductsList from "./ProductsList";
import { fetchProducts, appendProductsByLimit } from "../../state/creators";
import { Fragment, useEffect } from "react";
import { RootState } from "../../state/store";
import "./LoadButton.css";

const mapState = (state: RootState) => ({
  products: Object.values(state.products),
});

const connector = connect(mapState, { fetchProducts, appendProductsByLimit });

type PropsFromRedux = ConnectedProps<typeof connector>;

const AllProducts = (props: PropsFromRedux) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  const onLoadButtonClick = () => {
    props.appendProductsByLimit(30, props.products.length);
  };

  return (
    <Fragment>
      <h1>Product List</h1>
      <ProductsList />
      <div className="load_button_div">
        {props.products.length > 0 && props.products.length < 100 && (
          <button className="load_button" onClick={onLoadButtonClick}>
            Load more...
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default connector(AllProducts);
