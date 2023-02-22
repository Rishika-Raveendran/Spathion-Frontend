import React from "react";
import { Table, Button, Form, Card, Container } from "react-bootstrap";
const V_Lprofiles = () => {
  return (
    <div className="page bmint">
      <Container>
        <Form>
          <br />
          <div>
          
              <div style={{ textAlign: "center" }}>
                <h1>List of all lender profiles</h1>
              </div>
          
          </div>
        </Form>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl N.o</th>

              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>--</td>
            </tr>
            <tr>
              <td>2</td>
              <td>--</td>
            </tr>
            <tr>
              <td>3</td>
              <td>--</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default V_Lprofiles;
