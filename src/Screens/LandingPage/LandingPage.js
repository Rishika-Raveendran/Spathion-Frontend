import { Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import spath from "./spath.png";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h3 className="title">WELCOME TO SPATHION</h3>
              <p className="subtitle uppercase">CHOOSE YOUR ROLE</p>
            </div>
            <div className="buttonContainer">
              <a href="/lender/info">
                <div>
                  <button className="landingbutton btn ">LENDER</button>
                </div>
              </a>

              <a href="/borrower/info">
                <div>
                  <button className="landingbutton btn">BORROWER</button>
                </div>
              </a>
              <a href="/Validator/Lprofiles">
                <div>
                  <button className="landingbutton btn">VALIDATOR</button>
                </div>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
