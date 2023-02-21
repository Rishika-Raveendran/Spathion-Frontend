import React from "react";
import { Form, Card } from "react-bootstrap";

function PersonalFiles({ nextStep, prevStep,handleFileChange,inputValues}) {
  return (
    <>
      <div className="page">
        <div className="CSS1">
          <Card.Header>
            <h5> Identity and Address proof</h5>
          </Card.Header>
          <br />
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload an identity proof</Form.Label>
            <Form.Control
              type="file"
              name="identityProof"

              onChange={handleFileChange}
            />
         Uploaded: {inputValues["identityProof"]&&inputValues["identityProof"].name}
          </Form.Group>
          <br />
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload an address proof</Form.Label>
            <Form.Control
              type="file"
              name="addressProof"

              onChange={handleFileChange}
            />
          </Form.Group>
          Uploaded: {inputValues["addressProof"]&&inputValues["addressProof"].name}
        </div>
      </div>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </>
  );
}

export default PersonalFiles;
