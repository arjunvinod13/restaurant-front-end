import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import RestCard from './RestCard'
function AllRest() {
  const base_url='https://restaurant-back-end-x52z.onrender.com/restaurants'
  //to hold array of restaurant data
  const [AllRestData,setAllRestData]=useState([])
  //api fethching
  const fethData=async()=>{
  const result= await axios.get(base_url)
  console.log(result.data);
  setAllRestData(result.data)
  }
  console.log(AllRestData);
  useEffect(()=>{fethData()},[])



  return (
    <div>
      <Row>
        {
          AllRestData.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <RestCard restaurants={item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default AllRest