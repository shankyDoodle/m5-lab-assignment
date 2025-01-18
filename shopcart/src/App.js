import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PRODUCTS } from "./productsData";
import { Navbar } from "./Navbar";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: PRODUCTS
    };
  }

  handleQuantityChange = (id, newQuantity) => {
    const updatedProducts = this.state.products.map((product) =>
      product.id === id ? { ...product, value: newQuantity } : product
    );
    this.setState({ products: updatedProducts });
  };

  getTotalItems = () => {
    return this.state.products.reduce((total, product) => total + product.value, 0);
  };

  render() {
    return (
      <div>
        <Navbar products={this.state.products} handleQuantityChange={this.handleQuantityChange} getTotalItems={this.getTotalItems} />
      </div>
    );
  }
}

export default App;