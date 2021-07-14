import React from "react";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">THE SKATER</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Players</Nav.Link>
          <Nav.Link href="#features">Skateboard</Nav.Link>
          <Nav.Link href="#pricing">Mark</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
