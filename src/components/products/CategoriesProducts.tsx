import { connect, ConnectedProps } from "react-redux";
import { ChangeEvent, Fragment, useEffect } from "react";
import { RootState } from "../../state/store";
import { fetchCategories, fetchProducts, fetchProductsByCategory } from "../../state/creators";
import ProductsList from "./ProductsList";

const mapState = (state: RootState) => ({
  categories: state.categories,
});

const connector = connect(mapState, { fetchCategories, fetchProducts, fetchProductsByCategory });

type TypeFromRedux = ConnectedProps<typeof connector>;

const CategoriesProducts = (props: TypeFromRedux) => {
  useEffect(() => {
    props.fetchCategories();
    props.fetchProducts();
  }, []);

  const onSelectCategory = (event: ChangeEvent<HTMLInputElement>) => {
    props.fetchProductsByCategory(event.target.value)
  };

  const renderedCategories = () =>
    props.categories.map((category) => (
      <Fragment key={category}>
        <input type="radio" value={category} name="category" /> {category}
      </Fragment>
    ));

  return (
    <Fragment>
      <div className="categories" onChange={onSelectCategory}>
        <h1>Categories</h1>
        {props.categories ? renderedCategories() : <h1>Loading...</h1>}
      </div>
      <div className="products_category">
        <h1>Products of category</h1>
        <ProductsList />
      </div>
    </Fragment>
  );
};

export default connector(CategoriesProducts);
