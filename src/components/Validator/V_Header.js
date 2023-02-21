import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
const L_Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="nav">
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
            <Nav.Link href="/Validator/whitelist" >Whitelisting</Nav.Link>

            <Nav.Link href="/Validator/Lprofiles">Lender Profiles</Nav.Link>
            <Nav.Link href="/Validator/Bprofiles">Borrower Profiles</Nav.Link>
            <Nav.Link href="/Validator/invoicedetails">
              Invoices Details
            </Nav.Link>
            <Nav.Link href="/Validator/uploadedinvoices">
              Uploaded Invoices
            </Nav.Link>
            <Nav.Link href="/Validator/uploadedarpas">Uploaded ARPA</Nav.Link>
            <Nav.Link href="/Validator/approved">Approved invoices</Nav.Link>
            <Nav.Link href="/Validator/transfer">Transfer section</Nav.Link>

            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default L_Header;
