import * as React from "react";
import { Offcanvas } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";

interface IOffCanvasProps {}

const OffCanvas: React.FunctionComponent<IOffCanvasProps> = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <GiShoppingCart
        onClick={handleShow}
        style={{ color: "white", fontSize: "1.5em" }}
        onPointerEnter={(e) => (e.currentTarget.style.color = "#0d6efd")}
        onPointerLeave={(e) => (e.currentTarget.style.color = "white")}
      />
      <Offcanvas
        show={show}
        onHide={handleClose}
        name="OffCanvas"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Bill</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
