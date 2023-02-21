import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
// import connectFunctions from "../ConnectWallet";
import "./L_CSS.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Lend = () => {
 
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
              {/* <div className="CSS2"> */}
              <br />

              {/* <Button
                id="connectButton"
                variant="warning"
                onClick={connectFunctions.connectWallet()}
              >
                Connect to Metamask
              </Button> */}
              <ConnectButton/>

              <br />
              <br />
              <hr />

              <br />

              <br />
              {/* <Form.Label>
                <h4>Amount available: </h4>
              </Form.Label>
              <Card>
                <Card.Body id="walletAmount"></Card.Body>
              </Card> */}
              <br />
              <br />
              <hr />
              <br />

              <br />
              <br />
              <Form.Label>
                <h4>Enter amount willing to lend: </h4>
              </Form.Label>
              <Form.Control type="number" placeholder="Amount" />
              <br />
              <Button variant="primary" type="submit">
                Lend
              </Button>
              <br />

              <br />
              <p >
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
              <Form.Control type="number" placeholder="Amount" />
              <br />
              <Button variant="primary" type="submit" className="btn p-6">
                Withdraw
              </Button>
              <br />

              <br />
              <p>
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
