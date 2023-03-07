import React,{useState,useEffect} from "react";
import { Table, Button,  Container } from "react-bootstrap";
import Axios from "axios"
import baseUrl from "../baseUrl";
const V_Bprofiles = () => {

  const [borrowers, setBorrowers] = useState([])
  const [first, setfirst] = useState(1)

  //Fetching borrowers from database
  useEffect(() => {
    Axios.get(`${baseUrl}/borrower`).then((res)=>{
      
      setBorrowers(res.data)
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
      alert("Could not fetch borrowers! Try again")
    })
  }, [first])

  return (
    <div className="page">
      <Container>
        <br />
        <div >
          
            <div style={{ textAlign: "center" }}>
              <h3> List of all Borrower profiles</h3>
            </div>
         
        </div>

        {borrowers.length!=0?(<Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl N.o</th>
              <th>Details</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
           {borrowers.map((borrower,index)=>( <tr>
              <td>{index+1}</td>
              <td>{borrower.companyName}</td>

              <td>
                <Button variant="primary">Approve</Button>
              </td>
              <td>
                <Button className="reject">Reject</Button>
              </td>
            </tr>))}
        
          </tbody>
        </Table>):<p className="content">No lenders registered!</p>}
      </Container>
    </div>
  );
};

export default V_Bprofiles;
