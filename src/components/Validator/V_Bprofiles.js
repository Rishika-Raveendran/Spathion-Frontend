import React from "react";
import { Table, Button,  Container } from "react-bootstrap";
const V_Bprofiles = () => {
  return (
    <div className="page">
      <Container>
        <br />
        <div >
          
            <div style={{ textAlign: "center" }}>
              <h3> List of all Borrower profiles</h3>
            </div>
         
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl N.o</th>
              <th>Details</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>-</td>

              <td>
                <Button variant="primary">Approve</Button>
              </td>
              <td>
                <Button className="reject">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>-</td>

              <td>
                <Button variant="primary">Approve</Button>
              </td>
              <td>
                <Button className="reject">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>-</td>

              <td>
                <Button variant="primary">Approve</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default V_Bprofiles;
