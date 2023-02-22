import React from "react";
import { Table, Form, Container } from "react-bootstrap";
const V_Approvedinvoices = () => {
  return (
    <div className="page">
      <Container>
        <Form>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <h3>List of all approved innvoices</h3>
            </div>
          </div>
        </Form>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Invoice no.</th>

              <th>Company Name</th>
              <th>Loan amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>2</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>3</td>
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default V_Approvedinvoices;
