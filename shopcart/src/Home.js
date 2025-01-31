import React from "react";
import { Product } from "./Product";

export const Home = ({ products, handleQuantityChange, updateSortOption }) => {
  const handleSortChange = (e) => {
    updateSortOption(e.target.value);
  };

  return (
    <div className="p-4 d-flex flex-column gap-4">
      <div className="ms-auto">
        <label className="me-2">Sort By Price:</label>
        <select name="sort-select" onChange={handleSortChange}>
          <option value="normal">Normal</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onQuantityChange={handleQuantityChange}
        />
      ))}
    </div>
  );
};
