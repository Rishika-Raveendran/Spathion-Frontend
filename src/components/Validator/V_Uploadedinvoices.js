import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Axios from "axios";
import baseUrl from "../baseUrl";
import connectFunctions from "../ConnectWallet";

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
  connectFunctions.maintainWallet();
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
        <div className="my-2">
          {/* <ConnectButton /> */}

          <button
            id="connectButton"
            onClick={() => connectFunctions.connectWallet()}
          >
            Connect wallet
          </button>
        </div>
        <div id="walletAmount" className="text-white"></div>

        {invoices.length > 0 ? (
          <Table className="mt-4 mt-md-4">
            <Thead>
              <Tr>
                <Th>Sl N.o</Th>
                <Th>Invoices</Th>
                <Th>Approve</Th>
                <Th>Reject</Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoices.map((invoice, index) => {
                return (
                  <Tr className="mb-4  border border-white rounded mb-md-7">
                    <Td className="p-2">{index + 1}</Td>
                    <Td className="p-2">{invoice.companyName}</Td>

                    <Td className="p-2">
                      <Button
                        variant="primary"
                        className="approveButton"
                        onClick={() => {
                          handleApproval(invoice._id);
                        }}
                      >
                        Approve
                      </Button>
                    </Td>
                    <Td className="p-2">
                      <Button
                        className="reject"
                        onClick={() => {
                          handleRejection(invoice._id);
                        }}
                      >
                        Reject
                      </Button>
                    </Td>
                  </Tr>
                );
              })}{" "}
            </Tbody>
          </Table>
        ) : (
          <p className="content text-white">No unverified invoices</p>
        )}
      </Container>
    </div>
  );
};

export default V_Uploadedinvoices;
