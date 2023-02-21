import React from "react";
import { Table, Button, Form, Card, Container } from "react-bootstrap";
import "./B_CSS.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const B_Mint = () => {
  return (
    <div>
      <Container>
        <Form>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <h1>List of all invoices</h1>
            </div>
          </div>
          <br />
          <div className="CSS1" style={{ textAlign: "center" }}>
            <br />

            <ConnectButton />

            <br />

            <br />

            <br />
          </div>
          <br />
        </Form>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl N.o</th>

              <th>Date of invoice</th>
              <th>Name</th>
              <th>Supplier info</th>
              <th>Amount</th>
              <th>Due date</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>
                <Button variant="success">Apply</Button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>
                <Button variant="success">Apply</Button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>
                <Button variant="success">Apply</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default B_Mint;
