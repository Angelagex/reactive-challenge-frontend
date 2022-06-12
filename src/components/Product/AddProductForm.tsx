import * as React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveProductHandler } from "../../actions/productActions";
import { addProduct, Product } from "../../state/slices/productSlice";

interface IAddProductFormProps {}

const AddProductForm: React.FunctionComponent<IAddProductFormProps> = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [provider, setProvider] = React.useState("");
  const [maxAmount, setMaxAmount] = React.useState("");
  const [minAmount, setMinAmount] = React.useState("");

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveProductHandler(dispatch, {name, description, price: parseInt(price), provider, maxAmount: parseInt(maxAmount), minAmount: parseInt(minAmount), amount: 0 });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a New Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={(e) => handleSave(e)}>
          <Modal.Body>
            <label className="titleLabel">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="titleInput"
              placeholder="Product's Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="titleLabel">Description</label>
            <input
              id="description"
              type="text"
              name="description"
              className="titleInput"
              placeholder="Product's Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <label className="titleLabel">Price</label>
            <input
              id="price"
              type="number"
              name="price"
              className="titleInput"
              placeholder="Product's Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <label className="titleLabel">Provider</label>
            <input
              id="provider"
              type="text"
              name="provider"
              className="titleInput"
              placeholder="Product's Provider"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              required
            />
            <label className="titleLabel">MaxAmount</label>
            <input
              id="maxAmount"
              type="number"
              name="maxAmount"
              className="titleInput"
              placeholder="Product's MaxAmount"
              value={maxAmount}
              onChange={(e) => setMaxAmount(e.target.value)}
              required
            />
            <label className="titleLabel">MinAmount</label>
            <input
              id="minAmount"
              type="number"
              name="minAmount"
              className="titleInput"
              placeholder="Product's MinAmount"
              value={minAmount}
              onChange={(e) => setMinAmount(e.target.value)}
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AddProductForm;
