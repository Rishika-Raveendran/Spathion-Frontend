import React, { useEffect, useState } from "react";
import { Table, Button,  Container } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Axios from "axios";
import baseUrl from "../baseUrl";

const V_Uploadedinvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [first, setfirst] = useState(1);

  //Fetching invoices from database
  useEffect(() => {
    Axios.get(`${baseUrl}/invoice`)
      .then((res) => {
        console.log(res);
        setInvoices(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Could not fetch invoices! Try again");
      });
  }, [first]);

  //------------------Handle approval and rejection----------------------------------

  const handleApproval = (invoiceId) => {
    console.log("Approving");
    let obj = {
      invoiceId: invoiceId,
      docType: "invoiceVerified",
      status: true,
    };
    Axios.post(`${baseUrl}/verify`, obj)
      .then(() => alert("Approved!"))
      .catch((err) => alert("Approval unsuccessful. Try again"));
  };

  const handleRejection = (invoiceId) => {
    console.log("Rejecting");
    let obj = {
      invoiceId: invoiceId,
      docType: "invoiceVerified",
      status: false,
    };
    Axios.post(`${baseUrl}/verify`, obj)
      .then(() => alert("Document rejected"))
      .catch((err) => alert("Rejection cancelled. Try again"));
  };

  // --------------------------------------------------------------------------------
  return (
    <div className="page">
      <Container>
        <br />
        <div>
          <div style={{ textAlign: "center" }}>
            <h3>List of all uploaded invoices</h3>
          </div>
        </div>
        <div className="my-5">
          <ConnectButton />
        </div>

        {invoices.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sl N.o</th>
                <th>Invoices</th>
                <th>Approve</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{invoice.companyName}</td>

                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleApproval(invoice._id);
                        }}
                      >
                        Approve
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="reject"
                        onClick={() => {
                          handleRejection(invoice._id);
                        }}
                      >
                        Reject
                      </Button>
                    </td>
                  </tr>
                );
              })}{" "}
            </tbody>
          </Table>
        ) : (
          <p className="content text-white">No unverified invoices</p>
        )}
      </Container>
    </div>
  );
};

export default V_Uploadedinvoices;
