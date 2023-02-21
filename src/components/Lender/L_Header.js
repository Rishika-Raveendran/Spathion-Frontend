import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./L_CSS.css"
// import { Link } from "react-router-dom";
const L_Header = () => {
  return (
    <Navbar className="nav" expand="lg" variant="dark">
      <Container>
        <a
          style={{ display: "table-cell" }}
          href="/"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <Navbar.Brand>SPATHION</Navbar.Brand>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Lender/info" className="navlink ">Instructions</Nav.Link>
            <Nav.Link href="/Lender/profile" className="navlink ml-4">Profile</Nav.Link>
            <Nav.Link href="/Lender/lend" className="navlink ml-4">Wallet</Nav.Link>
            <Nav.Link href="/" className="navlink ml-4">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default L_Header;
