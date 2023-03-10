import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { auth } from "../../Firebase";
// import { Link } from "react-router-dom";
const B_Header = ({ setIsLoggedIn }) => {
  // Logging out----------------------------------------------------------
  const [submitting, setSubmitting] = useState(false);
  const [count, setCount] = useState(0);

  const history = useHistory();
  const logOut = () => {
    setSubmitting(true);
    console.log("logging out");
    auth
      .signOut()
      .then(() => {
        // setUser(undefined);
        if (typeof window !== "undefined") {
          window.sessionStorage.removeItem("user");
          window.localStorage.removeItem("user");
        }
        setIsLoggedIn(false);
        setSubmitting(false);
        setCount(1);
        alert("Successfully logged out!")
      })

      .catch((err) => alert("Could not logout, try again"));
  };
  useEffect(() => {
    let i = 0;
    if (count == 1 && submitting === false) {
      while (i < 1000) {
        i++;
      }
      history.push("/");
    }
  }, [count]);
  // --------------------------------------------------------------------------------------
  return (
    <Navbar expand="lg" variant="dark" className="nav">
      <Container>
        <a style={{ display: "table-cell" }} href="/" rel="noopener noreferrer">
          <Navbar.Brand>SPATHION</Navbar.Brand>
        </a>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Borrower/info" className="navlink">
              Instructions
            </Nav.Link>
            <Nav.Link href="/Borrower/profile" className="navlink">
              Profile
            </Nav.Link>
            {/* <Nav.Link href="/Borrower/customer">Customer</Nav.Link> */}
            <Nav.Link href="/Borrower/invoicedetails" className="navlink">
              Invoice-details
            </Nav.Link>
            <Nav.Link href="/Borrower/mint" className="navlink">
              Invoice-list
            </Nav.Link>

            <Nav.Link href="/Borrower/invoices" className="navlink">
              Loans{" "}
            </Nav.Link>

            <Nav.Link className="navlink ml-4">
              <button onClick={logOut}>Logout</button>
            </Nav.Link>
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
