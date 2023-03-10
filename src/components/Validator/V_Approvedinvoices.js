import React, { useState, useEffect } from "react";
import { Table, Form, Container } from "react-bootstrap";
import Axios from "axios";
import baseUrl from "../baseUrl";
const V_Approvedinvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [first, setfirst] = useState(1);

  //Fetching invoices from database
  useEffect(() => {
    Axios.get(`${baseUrl}/invoice-approved`)
      .then((res) => {
        console.log(res);
        setInvoices(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Could not fetch invoices! Try again");
      });
  }, [first]);
  return (
    <div className="page">
      <Container>
        <Form>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <h3>List of all approved invoices</h3>
            </div>
          </div>
        </Form>
      </Container>
      <Container>
        {invoices.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Invoice no.</th>

                <th>Company Name</th>
                <th>Loan amount</th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((invoice, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{invoice.companyName}</td>
                    <td>{invoice.loanRequired}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <p className="text-white content">No approved invoices</p>
        )}
      </Container>
    </div>
  );
};

export default V_Approvedinvoices;
