import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PRODUCTS } from "./productsData";
import { Navbar } from "./Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
      login: false,
      fbData: {},
      fbPic: "",
      sortOption: "normal",
    };
  }

  handleQuantityChange = (id, newQuantity) => {
    const updatedProducts = this.state.products.map((product) =>
      product.id === id ? { ...product, value: newQuantity } : product
    );
    this.setState({ products: updatedProducts });
  };

  getTotalItems = () => {
    return this.state.products.reduce(
      (total, product) => total + product.value,
      0
    );
  };

  setFbData = (fbData) => this.setState({ fbData });

  setFbPic = (fbPic) => this.setState({ fbPic });

  setLogin = (login) => this.setState({ login });

  updateSortOption = (sortOption) => {
    const productList = [...this.state.products];
    productList.sort((a, b) => {
      if (sortOption === "normal") {
        return a.id - b.id;
      }
      const isReversed = sortOption === "lowest" ? 1 : -1;
      return isReversed * (a.price - b.price);
    });
    this.setState({ products: productList });
    this.setState({ sortOption });
  };

  render() {
    return (
      <div>
        <Navbar
          products={this.state.products}
          login={this.state.login}
          fbData={this.state.fbData}
          fbPic={this.state.fbPic}
          handleQuantityChange={this.handleQuantityChange}
          getTotalItems={this.getTotalItems}
          setFbData={this.setFbData}
          setFbPic={this.setFbPic}
          setLogin={this.setLogin}
          updateSortOption={this.updateSortOption}
        />
      </div>
    );
  }
}

export default App;
