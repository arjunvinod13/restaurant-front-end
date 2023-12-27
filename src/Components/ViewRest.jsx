import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import RestOp from './RestOp';
import RestReview from './RestReview';


function ViewRest() {
  const [restDetails,setRestDetails]=useState({})

  // const paraId = useParams()
  // console.log(paraId.id); //useParams-Used to get path parameter from the url

  // destructur
  const{id}=useParams()
  console.log(id);

  //api call to get particular restaurant using path parameter
  const base_url ='https://restaurant-back-end-x52z.onrender.com/restaurants'

  const fetchRest =async()=>{
    const result=await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setRestDetails(result.data)
  }
  console.log(setRestDetails);


  useEffect(()=>{fetchRest()},[])
  return (
    <div>
<Row>
  <Col>
  <img src={restDetails.photograph} alt="" style={{width:'450px',height:'500px',margin:'40px'}}/>
  </Col>
  
  <Col>
  <div class="container my-5 p-5">
  <MDBListGroup style={{ minWidthL: '22rem' }} light>
    <h1>{restDetails.name}</h1>
      
      <MDBListGroupItem>Address : {restDetails.address}</MDBListGroupItem>
      <MDBListGroupItem>Neighborhood : {restDetails.neighborhood}</MDBListGroupItem>
      <MDBListGroupItem>Cusine type: {restDetails.cuisine_type}</MDBListGroupItem>
      <MDBListGroupItem><RestOp op={restDetails.operating_hours} /></MDBListGroupItem>
      <MDBListGroupItem><RestReview review={restDetails.reviews}/></MDBListGroupItem>
    </MDBListGroup>
  </div>
  </Col>
</Row>


    </div>
  )
}

export default ViewRest