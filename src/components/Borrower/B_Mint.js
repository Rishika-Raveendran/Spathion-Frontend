import React,{useState,useEffect} from "react";
import { Table, Button, Form, Card, Container } from "react-bootstrap";
import "./B_CSS.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Axios from 'axios';
import baseUrl from "../baseUrl";

const B_Mint = () => {
  const [invoiceList, setInvoiceList] = useState([])

  useEffect(()=>{
    Axios.get(`${baseUrl}/invoice`).then((res)=>{
      console.log(res)
      setInvoiceList(res.data)
    }).catch(err=>{
      console.log(err)
      alert("Could not fetch invoice list! Try again")

    })
  },[])
  return (
    <div className="page">
      <Container>
        <Form>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <h1>List of all invoices</h1>
            </div>
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <br />

            <ConnectButton />

            <br />

            <br />

            <br />
          </div>
          <br />
        </Form>
      </Container>
      <Container className="goBack bmint">
        <Table striped>
          <thead>
            <tr>
              <th>Sl N.o</th>

              <th>Date of invoice</th>
              <th>Name</th>
              <th>Supplier info</th>
              <th>Amount</th>
              <th>Due date</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {invoiceList.length!==0?(invoiceList.map((invoice,index)=>{
              return(
                <tr>
                <td>{index+1}</td>
                <td>{invoice.invoiceDate}</td>
                <td>{invoice.companyName}</td>
                <td>{invoice.supplierInvoice}</td>
                <td>{invoice.invoiceAmount}</td>
                <td>{invoice.invoiceDue}</td>
                <td>
                  <Button variant="success">Apply</Button>
                </td>
              </tr>
              )
            })):<div>No data</div>

            }
           

            
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default B_Mint;
