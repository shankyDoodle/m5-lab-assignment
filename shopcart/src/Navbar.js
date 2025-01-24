import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { Home } from './Home'
import { Cart } from './Cart'
import { Login } from "./Login"

export const Navbar = (props) => {
    return (
        <Router>
            <header className="bg-info text-white p-3 d-flex justify-content-between align-items-center">
                <Link to="/" className="d-flex align-items-end text-decoration-none text-white">
                    <FontAwesomeIcon
                        className="fas fa-2x m-3 text-white"
                        icon={faHome}
                        title="Shop 2 React"
                    />
                    <h1>Shop to React</h1>
                </Link>
                <div className="cart d-flex align-items-center">
                    <Link to="/cart">
                        <FontAwesomeIcon
                            className="fas fa-2x m-3 text-white"
                            icon={faShoppingCart}
                        />
                    </Link>
                    <span className="ms-2">{props.getTotalItems()} Items</span>
                </div>
            </header>
            <Routes>
                <Route path="/checkout" element={<Login {...props} />} />
                <Route path="/cart" element={<Cart {...props} />} />
                <Route path="/" element={<Home {...props} />} />
            </Routes>
        </Router>
    );

}

