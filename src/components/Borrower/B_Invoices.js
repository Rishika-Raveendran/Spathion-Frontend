import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./B_CSS.css";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Axios from "axios";
import baseUrl from "../baseUrl";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../../config";
import Web3 from "web3";
const B_Invoices = () => {
  const [loans, setLoans] = useState([]);
  const [contractInstance, setContractInstance] = useState();

  let web3;
  useEffect(() => {
    //Getting the applied loans from database
    Axios.get(`${baseUrl}/loan?user=${window.localStorage.user}`)
      .then((response) => setLoans(response.data))
      .catch((err) => console.log(err));
    //Function to connect to the  contract
    const loadContract = async () => {
      // Connect to Ethereum network
      web3 = new Web3(window.ethereum || "http://localhost:8545");

      // Load the contract ABI
      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

      // Set the contract instance
      setContractInstance(contract);
    };

    loadContract();
  }, []);

  const handleRepayment = async (debt) => {
    console.log(debt);
    try {
      web3 = new Web3(window.ethereum || "http://localhost:8545");
      await window.ethereum.send("eth_requestAccounts");
      var accounts = await web3.eth.getAccounts();
      var walletAddress = accounts[0];

      await contractInstance.methods.repay(debt).send({ from: walletAddress });
      alert("Repayment complete");
    } catch (err) {
      console.error(err);
      alert("Repayment failed");
    }
  };

  return (
    <div>
      <Container className="bmint page">
        <br />

        <div>
          <div style={{ textAlign: "center" }}>
            <h1>List of all active loans</h1>
          </div>
        </div>

        {loans.length !== 0 ? (
          <Table striped className="mt-5">
            <Thead>
              <Tr>
                <th>Sl N.o</th>
                <th>The Invoice</th>
                <th>Amount</th>
                <th>Repayment date</th>
                <th>Repay</th>
              </Tr>
            </Thead>
            <tbody>
              {loans.map((loan, index) => {
                return (
                  <Tr
                    className="mb-4  border border-white rounded mb-md-7 "
                    key={index}
                  >
                    <Td className="p-2">{index + 1}</Td>
                    <Td className="p-2">{loan.companyName}</Td>
                    <Td className="p-2">{loan.invoiceAmount}</Td>
                    <Td className="p-2">{loan.invoiceDue}</Td>
                    <Td className="p-2">
                      <Button
                        variant="primary"
                        className="applyButton"
                        onClick={() =>
                          handleRepayment(parseInt(loan.invoiceAmount))
                        }
                      >
                        Repay
                      </Button>
                    </Td>
                  </Tr>
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
