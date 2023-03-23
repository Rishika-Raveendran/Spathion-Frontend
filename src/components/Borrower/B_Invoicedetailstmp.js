import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import GoBack from "../B_Form/goBack";
import CustomerDetails from "../B_Invoice/Customer";
import Invoice from "../B_Invoice/Invoice";
import InvoiceDetails from "../B_Invoice/InvoiceDetails";
import Axios from "axios";
import baseUrl from "../baseUrl";
function B_Invoicedetails() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();
  let username;
  if (typeof window !== undefined) {
    username = window.localStorage.getItem("user");
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
  const onSubmit = () => {
    setSubmitting(true);
    var data = new FormData();
    //Appending inputs to formData

    data.append("username", username);
    data.append("companyName", formData["companyName"]);
    data.append("companyEmail", formData["companyEmail"]);
    data.append("companyContactNumber", formData["companyContactNumber"]);
    data.append("companyWebsite", formData["companyWebsite"]);
    data.append("companyAddress", formData["companyAddress"]);
    data.append("supplierInvoice", formData["supplierInvoice"]);
    data.append("invoiceDate", formData["invoiceDate"]);
    data.append("invoiceDue", formData["invoiceDue"]);
    data.append("invoiceAmount", formData["invoiceAmount"]);
    data.append("advanceAmount", formData["advanceAmount"]);
    data.append("loanRequired", formData["loanRequired"]);
    data.append("invoiceVerified", formData["invoiceVerified"]);
    data.append("arpaVerified", formData["arpaVerified"]);
    //appending files

    data.append("documents", formData["invoice"]);
    data.append("documents", formData["arpa"]);
    console.log(data);
    // ---------------------Post data -----------------------
    Axios.post(`${baseUrl}/invoice`, data)
      .then((response) => {
        console.log(response.data);

        alert("Invoice details saved!");
        setSubmitting(false);
        history.push("/Borrower/mint");
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
        alert("Submission unsuccessful! Try again!");
      });

    // history.push("/borrower/info")
  };

  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyContactNumber: "",
    companyWebsite: "",
    companyAddress: "",
    supplierInvoice: "",
    invoiceDate: "",
    invoiceDue: "",
    invoiceAmount: "",
    advanceAmount: "",
    loanRequired: "",
    invoice: "",
    arpa: "",
    invoiceVerified: false,
    arpaVerified: false,
  });

  switch (step) {
    case 1:
      return (
        <>
          <CustomerDetails
            nextStep={nextStep}
            handleChange={handleChange}
            inputValues={
              (formData.companyName,
              formData.companyAddress,
              formData.companyContactNumber,
              formData.companyEmail,
              formData.companyWebsite)
            }
          />
        </>
      );

    case 2:
      return (
        <InvoiceDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          inputValues={
            (formData.supplierInvoice,
            formData.invoiceAmount,
            formData.invoiceDate,
            formData.invoiceDue,
            formData.advanceAmount,
            formData.loanRequired)
          }
        />
      );

    case 3:
      return (
        <Invoice
          prevStep={prevStep}
          onSubmit={onSubmit}
          handleFileChange={handleFileChange}
          submitting={submitting}
          inputValues={(formData.invoice, formData.arpa)}
        />
      );
  }
}

export default B_Invoicedetails;
