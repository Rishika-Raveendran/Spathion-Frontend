import React, { useState, useEffect } from "react";
import { Table, Button,  Container } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Validator.css";
import Axios from "axios";
import baseUrl from "../baseUrl";
const V_Uploadedarpas = () => {
  const [arpas, setarpas] = useState([]);
  const [first, setfirst] = useState(1);

  //Fetching arpas from database
  useEffect(() => {
    Axios.get(`${baseUrl}/arpa`)
      .then((res) => {
        console.log(res);
        setarpas(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Could not fetch arpa documents! Try again");
      });
  }, [first]);

  const handleApproval = (invoiceId) => {
    console.log("Approving");
    let obj = {
      invoiceId: invoiceId,
      docType: "arpaVerified",
      status: true,
    };
    Axios.post(`${baseUrl}/verify`, obj)
      .then((res) => {
        setfirst(0);
        alert("Approval" + res.data.msg);
      })
      .catch((err) => alert("Approval unsuccessful. Try again"));
  };

  const handleRejection = (invoiceId) => {
    console.log("Rejecting");
    let obj = {
      invoiceId: invoiceId,
      docType: "arpaVerified",
      status: false,
    };
    Axios.post(`${baseUrl}/verify`, obj)
      .then(() => {
        setfirst(1);
        alert("Document rejected");
      })
      .catch((err) => alert("Rejection cancelled. Try again"));
  };

  // --------------------------------------------------------------------------------
  return (
    <div className="page">
      <Container>
        <br />
        <div>
          <div style={{ textAlign: "center" }}>
            <h3>List of all uploaded ARPA's</h3>
          </div>
        </div>
        <div className="my-5">
          <ConnectButton />
        </div>

        {arpas.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sl N.o</th>
                <th>ARPA's</th>
                <th>Approve</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {arpas.map((arpa, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{arpa.companyName}</td>

                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleApproval(arpa._id);
                        }}
                      >
                        Approve
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="reject"
                        onClick={() => {
                          handleRejection(arpa._id);
                        }}
                      >
                        Reject
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <p className="content text-white">No unverified invoices</p>
        )}
      </Container>
    </div>
  );
};

export default V_Uploadedarpas;
