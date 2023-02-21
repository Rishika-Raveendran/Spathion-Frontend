import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
const B_Header = () => {
  return (
    <Navbar  expand="lg" variant="dark" className="nav">
      <Container>
        <a
          style={{ display: "table-cell" }}
          href="/"
          
          rel="noopener noreferrer"
        >
          <Navbar.Brand>SPATHION</Navbar.Brand>
        </a>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Borrower/info" className="navlink">Instructions</Nav.Link>
            <Nav.Link href="/Borrower/profile" className="navlink">Profile</Nav.Link>
            {/* <Nav.Link href="/Borrower/customer">Customer</Nav.Link> */}
            <Nav.Link href="/Borrower/invoicedetails" className="navlink">Invoice-details</Nav.Link>
            <Nav.Link href="/Borrower/mint" className="navlink">Invoice-list</Nav.Link>

            <Nav.Link href="/Borrower/invoices" className="navlink">Loans </Nav.Link>

            <Nav.Link href="/" className="navlink">Logout</Nav.Link>
            {/* <NavDropdown title="Name" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default B_Header;
