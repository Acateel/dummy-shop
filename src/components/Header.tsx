import {Fragment} from "react"
import { Link } from "react-router-dom"
import {Outlet} from "react-router-dom"

const Header = () => {
    return (
        <Fragment>
            <header>
                <Link to="/" className="nav_link">Products</Link>
                <a className="nav_link">Categories</a>
                <a className="nav_link">Search</a>
                <a className="nav_link">Login</a>
            </header>
            <div className="content">
                <Outlet/>
            </div>
        </Fragment>
    )
}

export default Header