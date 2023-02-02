import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../state/store";
import { fetchProducts } from "../../state/creators";
import { Fragment, useEffect } from "react";
import _ from "lodash";

const mapState = (state: RootState) => ({
    products: state.products
})

const connector = connect(mapState, {fetchProducts})

type PropsFromRedux = ConnectedProps<typeof connector>

const ProductsList = (props: PropsFromRedux) => {
    useEffect(()=>{
        props.fetchProducts()
    }, [])

    const renderedList = () =>  Object.values(props.products).map(product => (
        <div key={product.id}>
            {product.title}
        </div>
    ))

    return (
        <Fragment>
            <h1>Product List</h1>
            {_.isEmpty(props.products) ? null : renderedList()}
        </Fragment>
    )
}

export default connector(ProductsList)