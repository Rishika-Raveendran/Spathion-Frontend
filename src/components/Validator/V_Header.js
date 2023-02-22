import React from "react";
import { Container, Nav, Navbar,Dropdown } from "react-bootstrap";
import "./Validator.css"
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
           
           
{/* ------------------------------------------------------------------------------------- */}

<Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Profiles
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/Validator/Bprofiles">Borrowers</Dropdown.Item>
        <Dropdown.Item href="/Validator/Lprofiles">Lenders</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Uploaded documents
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/Validator/uploadedinvoices">Invoices</Dropdown.Item>
        <Dropdown.Item href="/Validator/uploadedarpas">ARPA</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>

{/* ------------------------------------------------------------------------------------------ */}
<Nav.Link className="navlink" href="/Validator/approved">Approved invoices</Nav.Link>
            <Nav.Link className="navlink" href="/Validator/transfer">Transfer section</Nav.Link>
            <Nav.Link className="navlink" href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default L_Header;
