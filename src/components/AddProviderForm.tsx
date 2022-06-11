import * as React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProvider, Provider } from "../state/slices/providerSlice";

interface IAddProviderFormProps {}

const AddProviderForm: React.FunctionComponent<IAddProviderFormProps> = () => {
  const [providerId, SetProviderId] = React.useState("");
  const [name, SetName] = React.useState("");
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, providerId);
    
    dispatch(
      addProvider({
        id: "12312",
        providerId: providerId,
        name: name,
      } as Provider)
    );
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Provider
      </Button>

      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a New Provider</Modal.Title>
        </Modal.Header>
        <form onSubmit={(e) => handleSave(e)}>
          <Modal.Body>
            <label className="titleLabel">Document</label>
            <input
              id="providerId"
              type="text"
              name="providerId"
              className="titleInput"
              placeholder="Provider's Document"
              value={providerId}
              onChange={(e) => SetProviderId(e.target.value)}
            />
            <label className="titleLabel">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="titleInput"
              placeholder="Provider's Name"
              value={name}
              onChange={(e) => SetName(e.target.value)}
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

export default AddProviderForm;
