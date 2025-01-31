import { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Input,
  Form,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Product = ({ product, onQuantityChange, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    onQuantityChange(product.id, value);
  };

  const handleQtyIncrease = () => {
    onQuantityChange(product.id, product.value + 1);
  };

  const handleQtyDecrease = () => {
    if (Number(product.value) === 0) return;
    onQuantityChange(product.id, product.value - 1);
  };

  const handleShow = () => setIsOpen(true);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Card className="w-100 d-flex flex-row p-4">
        <CardImg
          src={product.image}
          alt={product.desc}
          style={{ width: "10%" }}
          onClick={handleShow}
        />
        <CardBody className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <CardTitle tag="h5">{product.desc}</CardTitle>
            <h5 className="text-danger">${product.price}</h5>
          </div>
          {disabled ? (
            <Label>Quantity: {product.value}</Label>
          ) : (
            <Form>
              <FormGroup className="d-flex align-items-center mt-3 gap-2">
                <FontAwesomeIcon
                  className="fas fa-2x text-black border border-2"
                  icon={faPlus}
                  onClick={handleQtyIncrease}
                />
                <FontAwesomeIcon
                  className="fas fa-2x text-black border border-2"
                  icon={faMinus}
                  disabled={Number(product.value) === 0}
                  onClick={handleQtyDecrease}
                />
                <Input
                  type="number"
                  value={product.value}
                  onChange={handleChange}
                  min="0"
                  className="me-2"
                  style={{ width: "100px" }}
                />
                <Label>Quantity</Label>
              </FormGroup>
            </Form>
          )}
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} toggle={onToggle}>
        <ModalHeader toggle={onToggle}>{product.desc}</ModalHeader>
        <ModalBody>
          <CardImg src={product.image} alt={product.desc} />
        </ModalBody>
        <ModalFooter>
          <Label>Ratings: {product.ratings}/5</Label>
        </ModalFooter>
      </Modal>
    </div>
  );
};
