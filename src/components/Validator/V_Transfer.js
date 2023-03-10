import React, { useEffect, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Validator.css";
import Axios from "axios";
import baseUrl from "../baseUrl";
const V_Transfer = () => {
  const [borrowers, setBorrowers] = useState([]);
  const [first, setfirst] = useState(1);
  const [selectedBorrower, setSelected] = useState("Borrower not selected");

  //Fetching borrowers from database
  useEffect(() => {
    Axios.get(`${baseUrl}/borrower`)
      .then((res) => {
        setBorrowers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Could not fetch borrowers! Try again");
      });
  }, [first]);
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
                  <ConnectButton />
                </div>

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
                <div className="selectField">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      setSelected(e.target.value);
                    }}
                  >
                    <option value="None">Select</option>
                    {borrowers.length > 0 ? (
                      borrowers.map((borrower) => {
                        return (
                          <option value={borrower.companyName}>
                            {borrower.companyName}
                          </option>
                        );
                      })
                    ) : (
                      <option>Borrowers list empty</option>
                    )}
                  </Form.Select>
                  <div className="text-white">{selectedBorrower}</div>
                </div>
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
