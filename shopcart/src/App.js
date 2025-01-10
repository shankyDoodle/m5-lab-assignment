import React, { Component } from "react";
import { Container, Row, Card, CardBody, CardTitle, CardImg, Input, Form, FormGroup, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ product, onQuantityChange }) => {
  const handleChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    onQuantityChange(product.id, value);
  };

  return (
    <Card className="w-100 d-flex flex-row p-4">
      <CardImg src={product.image} alt={product.desc} style={{ width: '10%' }} />
      <CardBody className="d-flex justify-content-between align-items-center">
        <CardTitle tag="h5">{product.desc}</CardTitle>
        <Form>
          <FormGroup className="d-flex align-items-center mt-3">
            <Input
              type="number"
              value={product.value}
              onChange={handleChange}
              min="0"
              className="me-2"
              style={{ width: '100px' }}
            />
            <Label>Value</Label>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        { id: 1, desc: "Unisex Cologne", image: "./products/cologne.jpg", value: 0 },
        { id: 2, desc: "Apple iWatch", image: "./products/iwatch.jpg", value: 0 },
        { id: 3, desc: "Unique Mug", image: "./products/mug.jpg", value: 0 },
        { id: 4, desc: "Mens Wallet", image: "./products/wallet.jpg", value: 0 },
      ],
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
      <Container>
        <header className="bg-info text-white p-3 d-flex justify-content-between align-items-center">
          <h1>Shop to React</h1>
          <div className="cart d-flex align-items-center">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <span className="ms-2">{this.getTotalItems()} Items</span>
          </div>
        </header>
        <div className="p-4">
          {this.state.products.map((product) => (
            <Row key={product.id} className="mb-4">
              <Product product={product} onQuantityChange={this.handleQuantityChange} />
            </Row>
          ))}
        </div>
      </Container>
    );
  }
}

export default App;