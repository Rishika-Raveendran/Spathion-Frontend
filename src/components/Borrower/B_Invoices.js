import React, { useState, useEffect } from "react";
import { Button, Table, Container, Form } from "react-bootstrap";
import "./B_CSS.css";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Axios from "axios";
import baseUrl from "../baseUrl";

const B_Invoices = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    Axios.get(`${baseUrl}/loan?user=${window.localStorage.user}`)
      .then((response) => setLoans(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container className="page">
        <br />

        <div>
          <div style={{ textAlign: "center" }}>
            <h1>List of all active loans</h1>
          </div>
        </div>

        {loans.length !== 0 ? (
          <Table striped>
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
              {loans.map((loan, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{loan.companyName}</td>
                    <td>{loan.invoiceAmount}</td>
                    <td>{loan.invoiceDue}</td>
                    <td>
                      <Button variant="primary">Repay</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <p className="content">You have not applied for any loans</p>
        )}
      </Container>
    </div>
  );
};
export default B_Invoices;
