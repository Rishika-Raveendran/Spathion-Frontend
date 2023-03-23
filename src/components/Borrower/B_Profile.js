import React, { useState } from "react";
import CompanyDetails from "../B_Form/companyDetails";
// import CompanyFiles from "../B_Form/companyFiles";
import GoBack from "../B_Form/goBack";
import Personaldetails from "../B_Form/personaldetails";
import PersonalFiles from "../B_Form/personalFiles";
import { useHistory } from "react-router-dom";
import Web3 from "web3";
import Axios from "axios";

function B_Profile() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();
  let username;
  if (typeof window !== undefined) {
    username = window.sessionStorage.getItem("user");
  }

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0],
    });
  };
  const onSubmit = async () => {
    setSubmitting(true);
    var data = new FormData();
    var web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");
    var accounts = await web3.eth.getAccounts();
    var walletAddress = accounts[0];
    //Appending inputs to formData
    data.append("walletAddress", walletAddress);
    data.append("username", username);
    data.append("fullName", formData["fullName"]);
    data.append("email", formData["email"]);
    data.append("nationality", formData["nationality"]);
    data.append("designation", formData["designation"]);
    data.append("contactNumber", formData["contactNumber"]);
    data.append("companyName", formData["companyName"]);
    data.append("companyEmail", formData["companyEmail"]);
    data.append("companyContactNumber", formData["companyContactNumber"]);
    data.append("companyWebsite", formData["companyWebsite"]);
    data.append("companyAddress", formData["companyAddress"]);
    //appending files
    data.append("documents", formData["identityProof"]);
    data.append("documents", formData["addressProof"]);
    data.append("documents", formData["certificatOfIncorporation"]);
    data.append("documents", formData["MOAAOA"]);
    data.append("documents", formData["auditReport"]);
    data.append("documents", formData["GST"]);
    data.append("documents", formData["director1"]);
    data.append("documents", formData["director2"]);
    data.append("documents", formData["director3"]);

    // ---------------------Post data -----------------------
    Axios.post(`${baseUrl}/borrower`, data)
      .then((response) => {
        console.log(response.data);

        alert("Borrower profile created!");
        setSubmitting(false);
        history.push("/Borrower/invoicedetails");
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
        alert("Submission unsuccessful! Try again!");
      });

    // history.push("/borrower/info")
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    nationality: "",
    designation: "",
    contactNumber: "",
    identityProof: "",
    addressProof: "",
    companyName: "",
    companyEmail: "",
    companyContactNumber: "",
    companyWebsite: "",
    companyAddress: "",
    certificateOfIncorporation: "",
    MOAAOA: "",
    auditReport: "",
    GST: "",
    director1: "",
    director2: "",
    director3: "",
  });

  switch (step) {
    case 1:
      return (
        <>
          <Personaldetails
            nextStep={nextStep}
            handleChange={handleChange}
            // handleFileChange={handleFileChange}
            inputValues={{
              fullName: formData["fullName"],
              email: formData["email"],
              nationality: formData["nationality"],
              designation: formData["designation"],
              contactNumber: formData["contactNumber"],
            }}
          />
        </>
      );

    case 2:
      return (
        <PersonalFiles
          nextStep={nextStep}
          // handleChange={handleChange}
          inputValues={{
            identityProof: formData["identityProof"],
            addressProof: formData["addressProof"],
          }}
          handleFileChange={handleFileChange}
          prevStep={prevStep}
        />
      );

    case 3:
      return (
        <CompanyDetails
          nextStep={nextStep}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          inputValues={{
            companyName: formData["companyName"],
            companyAddress: formData["companyAddress"],
            companyEmail: formData["companyEmail"],
            companyWebsite: formData["companyWebsite"],
            companyContactNumber: formData["companyContactNumber"],
            certificateOfIncorporation: formData["certificateOfIncorporation"],
            MOAAOA: formData["MOAAOA"],
            auditReport: formData["auditReport"],
            GST: formData["GST"],
            director1: formData["director1"],
            director2: formData["director2"],
            director3: formData["director3"],
          }}
          prevStep={prevStep}
        />
      );

    default:
      return (
        <GoBack
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          onSubmit={onSubmit}
          submitting={submitting}
        />
      );
  }
}

export default B_Profile;
