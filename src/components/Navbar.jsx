import React from "react";
import Nav from "react";
import "../scss/css/styles.css";

class Navbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#">Categories</Nav.Link>
          <Nav.Link href="#">Contact us</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navbar;
