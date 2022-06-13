import * as React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import BillOffCanvas from "./Bill/BillOffCanvas";
import ReceiptOffCanvas from "./Receipt/ReceiptOffCanvas";

interface INavbarProps {}
const expand = "xxl";

const AppNavbar: React.FunctionComponent<INavbarProps> = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Don Raul's Hardware Store</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="linkLabel" to="/stock">Stock</Link>
          <Link className="linkLabel" to="/providers">Providers</Link>
          <Link className="linkLabel" to="/bills">Bills</Link>
          <Link className="linkLabel" to="/receipts">Receipts</Link>
          <Link className="linkLabel" to="#">Logout</Link>
          <Link className="linkLabel" to="#">
            <BillOffCanvas />
          </Link>
          <Link className="linkLabel" to="#">
            <ReceiptOffCanvas />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
