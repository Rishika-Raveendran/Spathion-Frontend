import React, { useState, useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { InfinitySpin } from "react-loader-spinner";
// import { useForm } from "react-hook-form";
import { storage } from "../../Firebase";
import Axios from "axios";
import baseUrl from "../baseUrl";
import "./L_CSS.css";

const L_Profile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [selectedFile, setFile] = useState(false);
  const formRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const functionSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // -------------------Firebase image upload and storing form data to database--------------------------
    let fileObj = selectedFile;

    const uploadTask = storage.ref(`dyuthi/${fileObj.name}`).put(fileObj);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progressPercentage);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        storage
          .ref(`dyuthi/${fileObj.name}`)
          .getDownloadURL()
          .then((res) => {
          
            let obj = {
              fullName: fullName,
              email: email,
              nationality: nationality,
              identityProof: res,
            };

            //---------------------Axios post----------------------------------------------
            Axios.post(`${baseUrl}/lender`, obj)
              .then(() => {
                setSubmitting(false);
                
                alert("Lender profile created!");
                formRef.current.reset();
              })
              .catch((err) => {
                alert("Unsuccessful registration!");
                setSubmitting(false);
                formRef.current.reset();
              });
            // ---------------------------------------------------------------------------
          })
          .catch((err) => {
            console.log("Error", err);
          });
      }
    );
  };

  return (
    <div className="page">
      {submitting === false ? (
        <Container>
          <Form onSubmit={(e) => functionSubmit(e)} ref={formRef}>
            <br />
            <div>
              <div style={{ textAlign: "center", fontSize: "large" }}>
                <h1> PROFILE</h1>
              </div>

              <div style={{ fontSize: "small" }}>
                <h5>Please fill the following details:</h5>
              </div>
            </div>
            <br />
            <div className="CSS2">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                // placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  // placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  (We'll never share your email with anyone else)
                </Form.Text>
              </Form.Group>

              <Form.Label>Nationality</Form.Label>
              <Form.Control
                type="text"
                // placeholder="Country name"
                className="myInput"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
              <br />
              {/* ---------------------------------------------------------------  */}
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload an identity proof</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
                {selectedFile && <p>{selectedFile.name}</p>}
              </Form.Group>
              {/* ------------------------------------------------------------------  */}

              <br />

              <button type="submit">
                Submit
              </button>
              <br />
            </div>
            <br />
          </Form>
        </Container>
      ) : (
        <div className="content">
          <div>
            <p>Uploading your details...</p>
          </div>
          <InfinitySpin width="200" color="#4cb8c4" />
        </div>
      )}
    </div>
  );
};

export default L_Profile;
