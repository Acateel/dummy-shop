import {Fragment} from "react"
import { Link } from "react-router-dom"
import {Outlet} from "react-router-dom"
import "./Header.css"
import SearchForm from "./search/SearchForm"

const Header = () => {
    return (
        <Fragment>
            <header>
                <div className="header_left">
                    <Link to="/" className="nav_link">Products</Link>
                    <a className="nav_link">Categories</a>
                    <div className="nav_link">
                        <SearchForm/>
                    </div>
                </div>
                <a className="nav_link">Login</a>
            </header>
            <div className="content">
                <Outlet/>
            </div>
        </Fragment>
    )
}

export default Header