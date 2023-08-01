import { React } from "react";
import { Container, Col, Navbar, Nav, Button } from "react-bootstrap";

function Head(props) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Clean Sweep</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-5">
            <Nav.Link href="#home">How it works</Nav.Link>
            <Nav.Link href="#home">Search</Nav.Link>
            <Nav.Link href="#home">More</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            </Nav>
          <Navbar.Text>
            <Button size="sm" variant="outline-dark">
              Sign up
            </Button>{" "}
            <Button size="sm" variant="dark">
              Login
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;
