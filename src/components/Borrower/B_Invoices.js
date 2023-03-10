import React from "react";
import { Button,  Table, Container, Form } from "react-bootstrap";
import "./B_CSS.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const B_Invoices = () => {
  return (
    <div>
      <Container className="page">
        <br />

        <Form>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <h1>List of all active loans</h1>
            </div>
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <br />

            <ConnectButton />

            <br />

            <br />

            <br />
          </div>
          <br />
        </Form>
       
          <Table striped > 
            <thead>
              <tr>
                <th>Sl N.o</th>
                <th>The Invoice</th>
                <th>Amount</th>
                <th>Repayment date</th>
                <th>Repay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="primary">Repay</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>

                <td>
                  <Button variant="primary">Repay</Button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button variant="primary">Repay</Button>
                </td>
              </tr>
            </tbody>
          </Table>
      </Container>
    </div>
  );
};
export default B_Invoices;
