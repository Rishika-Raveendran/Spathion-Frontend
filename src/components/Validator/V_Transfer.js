import React from "react";
import { Form, Card, Container, Button } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Validator.css"

const V_Transfer = () => {
  return (
    <div className="page">
      <Container>
        <Form>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <h3>Transfer Window</h3>
            </div>
          </div>
        </Form>
      </Container>
      <div>
        <Container>
          <br />

          <div className="CSS2">
            <div style={{ textAlign: "center" }}>
              <Form>
                <br />

                <div style={{ display: "flex", justifyContent: "center" }}>
                <ConnectButton /></div>

                {/* <br />
                <br />
                <br />

                <hr />
                <br />
                <Form.Label>
                  <h4>Amount available: </h4>
                </Form.Label>
                <Card>
                  <Card.Body id="walletAmount"></Card.Body>
                </Card>
                <br />
                <br />
                <hr />
                <br /> */}

                <br />
                <br />
                <br />
                <br />
                <Form.Label>
                  <h4>Select borrower/address: </h4>
                </Form.Label>
                <br />
                {/* <Form.Control type="alphanumeric" placeholder="Address" /> */}
                <div className="selectField"><Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <div>Borrower's address</div></div>
                <br />

                <br />
                <br />

                <Form.Label>
                  <br />
                  <h4>Enter amount: </h4>
                </Form.Label>
                <Form.Control type="number" placeholder="Amount" />
                <br />
                <Button variant="primary" type="submit">
                  Send
                </Button>

                <br />
                <br />
                <br />
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default V_Transfer;
