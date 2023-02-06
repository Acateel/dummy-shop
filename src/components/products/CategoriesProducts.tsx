import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchCategories } from "../../state/creators";
import { Fragment, useEffect } from "react";

const mapState = (state: RootState) => ({
  categories: state.categories
});

const connector = connect(mapState, {fetchCategories})

type TypeFromRedux = ConnectedProps<typeof connector>

const CategoriesProducts = (props: TypeFromRedux) => {
  useEffect(()=>{
    props.fetchCategories()
  }, [])

  const renderedCategories = () => props.categories.map(category => (
    <p key={category}>{category}</p>
  ))

  return (
    <Fragment>
      <div className="categories">
        <h1>Categories</h1>
        {props.categories ? renderedCategories() : <h1>Loading...</h1> }
      </div>
      <div className="products_category">
          <h1>Products of category</h1>
      </div>
    </Fragment>
  );
};

export default connector(CategoriesProducts)
