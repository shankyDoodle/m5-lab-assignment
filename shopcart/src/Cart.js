import React from "react";
import { Row, Button } from "reactstrap";
import { Product } from './Product'
import { Link } from "react-router-dom";

export const Cart = ({ products, handleQuantityChange, login }) => {

    const nonZeroCartItems = products.filter(p => p.value !== 0)
    return (
        <div className="p-4 d-flex gap-2 flex-column">
            <h2>Your Cart Items</h2>
            {nonZeroCartItems.length === 0 ?
                <h3>There are 0 items in your cart.</h3> :
                nonZeroCartItems.map((product) => (
                    <Row key={product.id} className="mb-4">
                        <Product product={product} onQuantityChange={handleQuantityChange} disabled />
                    </Row>
                ))}
            {nonZeroCartItems.length === 0 ?
                <Link to="/">
                    <Button style={{ width: "fit-content" }} color="success">Continue Shopping</Button>
                </Link> :
                <Link to="/checkout">
                    <Button style={{ width: "fit-content" }} color="success">Check Out</Button>
                </Link>}
        </div>
    );
}
