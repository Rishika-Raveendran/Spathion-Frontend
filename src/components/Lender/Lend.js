import React, { useState, useEffect } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import connectFunctions from "../ConnectWallet";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../../config";
import Web3 from "web3";
import "./L_CSS.css";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

const Lend = () => {
  const [contractInstance, setContractInstance] = useState();
  const [lendAmount, setLendAmount] = useState(0);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  //Function to connect to the  contract
  let web3;
  useEffect(() => {
    const loadContract = async () => {
      // Connect to Ethereum network
      web3 = new Web3(window.ethereum || "http://localhost:8545");
      let chainId = await web3.eth.getChainId();
      console.log(chainId);
      console.log(typeof chainId);
      // Load the contract ABI
      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

      // Set the contract instance
      setContractInstance(contract);
    };

    loadContract();
  }, []);

  const handleLend = async () => {
    // console.log(contractInstance);
    let lend = parseInt(lendAmount);
    console.log(lend);
    try {
      web3 = new Web3(window.ethereum || "http://localhost:8545");
      await window.ethereum.send("eth_requestAccounts");
      var accounts = await web3.eth.getAccounts();
      var walletAddress = accounts[0];

      await contractInstance.methods
        .deposit(lend)
        .send({ from: walletAddress });
      alert("Deposit successful");
    } catch (err) {
      console.error(err);
    }
  };

  const handleWithdraw = async () => {
    let withdraw = parseInt(withdrawalAmount);
    console.log(withdrawalAmount);
    try {
      web3 = new Web3(window.ethereum || "http://localhost:8545");
      await window.ethereum.send("eth_requestAccounts");
      var accounts = await web3.eth.getAccounts();
      var walletAddress = accounts[0];

      await contractInstance.methods
        .withdraw(withdraw)
        .send({ from: walletAddress });
      alert("Withdrawal successful");
    } catch (err) {
      console.error(err);
    }
  };

  connectFunctions.maintainWallet();
  return (
    <div className="page">
      <Container>
        <br />
        <div>
          <div style={{ textAlign: "center" }}>
            <h1> Wallet </h1>
          </div>
        </div>
        <br />
        <div className="CSS2">
          <div style={{ textAlign: "center" }}>
            <Form>
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                {/* <ConnectButton /> */}
                <button
                  id="connectButton"
                  onClick={() => connectFunctions.connectWallet()}
                >
                  Connect wallet
                </button>
              </div>
              <div id="walletAmount" className="text-white">
                .
              </div>

              <br />
              <br />
              <br />
              <br />
              <Form.Label>
                <h4>Enter amount willing to lend: </h4>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Amount"
                onChange={(e) => setLendAmount(parseInt(e.target.value))}
              />
              <br />
              <Button
                variant="primary"
                // type="submit"
                onClick={() => handleLend()}
              >
                Lend
              </Button>
              <br />

              <br />
              <p style={{ color: "white" }}>
                Your amount will be locked for a period of 30 days once lent.
              </p>
              <br />
              <hr />
              <br />

              <br />

              <Form.Label>
                <h4>Amount locked: </h4>
              </Form.Label>
              <Card>
                <Card.Body></Card.Body>
              </Card>
              <br />
              <br />
              <hr />

              <br />

              <br />
              <Form.Label>
                <h4>Enter withdrawal amount: </h4>
              </Form.Label>
              <br />
              <Form.Control
                type="number"
                placeholder="Amount"
                onChange={(e) => setWithdrawalAmount(parseInt(e.target.value))}
              />
              <br />
              <Button
                variant="primary"
                // type="submit"
                className="btn p-6"
                onClick={() => handleWithdraw()}
              >
                Withdraw
              </Button>
              <br />

              <br />
              <p style={{ color: "gray" }}>
                The rate of interest for your amount deposited is 14% which can
                be withdrawn only after the 30 days locking period.
              </p>
              <br />
            </Form>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Lend;
