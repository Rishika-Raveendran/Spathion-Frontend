import React from "react";
import { Button, Form, Card, Container } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";


const V_Whitelist = () => {
 
  return (
    <div>
      <Container>
        <Form>
          <br />
          <div>
        
              <div style={{ textAlign: "center" }}>
                <h3>Whitelising window</h3>
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
                {/* <div className="CSS2"> */}
                <br />

               <ConnectButton/>

                <br />
                <br />

                <br />
                <Form.Label>
                  <h4>Enter address: </h4>
                </Form.Label>
                <Form.Control type="alphanumeric" placeholder="Address" />
                <br />

                <br />
                <br />

                <Button variant="primary" type="submit">
                  Whitelist
                </Button>

                <br />
                <br />
                <br />
              </Form>
            </div>
          </div>
        </Container>
      </div>
      <div id="walletAmount" hidden="true"></div>

      <div>
        <Container>
          <Form>
            <br />
            <div className="CSS1">
              <Card.Header>
                <div style={{ textAlign: "center" }}>
                  <h3>Whitelisted addresses</h3>
                </div>
              </Card.Header>
            </div>
          </Form>
        </Container>
      </div>
      <br />
      <div>
        <Container>
          <Form>
            <div className="CSS1">
              <br />
              <br />
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default V_Whitelist;
