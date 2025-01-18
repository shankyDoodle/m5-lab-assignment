import React from "react";
import { Row } from "reactstrap";
import { Product } from './Product'

export const Home = ({ products, handleQuantityChange }) => {

    return (
        <div className="p-4">
            {products.map((product) => (
                <Row key={product.id} className="mb-4">
                    <Product product={product} onQuantityChange={handleQuantityChange} />
                </Row>
            ))}
        </div>
    );
}
