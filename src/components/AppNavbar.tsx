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

interface INavbarProps {}
const expand = "xxl";

const AppNavbar: React.FunctionComponent<INavbarProps> = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Don Raul's Hardware Store</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Stock</Nav.Link>
      <Nav.Link href="/providers">Providers</Nav.Link>
      <Nav.Link href="/bills">Bills</Nav.Link>
      <Nav.Link href="/receipts">Receipts</Nav.Link>
      <Nav.Link href="#">Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default AppNavbar;
