import { Fragment } from "react"
import { useLocation } from "react-router-dom"

const SearchProducts = () => {
    const {state} = useLocation()

    return (
        <Fragment>
            <h1>Search</h1>
            <p>{state}</p>
        </Fragment>
    )
}

export default SearchProducts