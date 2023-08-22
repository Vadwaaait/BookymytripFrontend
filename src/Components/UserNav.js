import React from 'react'
import {  Link  } from "react-router-dom";
import "../Components/Styles/LoginNav.css"
import { Button } from 'bootstrap';
import "../images/logo.png"

const userNav = () => {
  return (
    <>
      
    <div className='mylognav'>
    <div className='loginnavlog'>
      <div className="navlogo">
     <h4 style={{color:"red"}}>BookMyTrip
    </h4>
           </div>
      </div>

    <div className='loginnav'>
   
    <Link to="/featured" >  Featured </Link>
    
      </div>

  <div className='loginnav'>
      <Link to="/myBooking">My Bookings</Link>
      </div>
     <div className='loginnav'>
      <Link to="/allHotels">All Hotels</Link>
      </div>
   <div className='loginnav'>
      <Link to="/AdminRegister">Search Hotels</Link>
    
      </div>

      

      </div>
      <hr />
      
  </>
  )
}

export default userNav
