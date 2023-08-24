import React, { useEffect, useState } from 'react'
import UserNav from '../Components/UserNav'
import "../Components/Styles/hoteldetails.css"
import Cookies from 'js-cookie';
import axios from 'axios';

const Hoteldetails = () => {


  const[hotelinfoo,sethotelinfoo]=useState([])



  const hotelid=Cookies.get('hotelidd');

  const fetchdata=()=>{

    fetch("http://localhost:8080/api/user/hotel/id/"+hotelid).then(resp=>resp.json()).then(resp=> {console.log(resp);
             sethotelinfoo(resp)})

  }

  useEffect(()=>{
    fetchdata();
  },[])


  return (
    <>
     <UserNav /> 

        <div className="deschotel">
            <h2>Name : {hotelinfoo.hotelName}</h2>
            <h4>city : {hotelinfoo.hotelCity}</h4>
            <h4>HOTEL Address : {hotelinfoo.hotelAddress}</h4>
            <h3 style={{color:"green"}}>Price : {hotelinfoo.hotelPrice}</h3>
            <h4>Hotel Description</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione ullam corrupti non ea inventore ducimus rerum recusandae iste iure accusamus unde, commodi asperiores, error quasi nulla saepe eum sunt.</p>
            <h5>{hotelid}</h5>
            </div>
    </>
  )
}

export default Hoteldetails
