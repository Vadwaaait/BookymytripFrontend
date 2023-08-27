import React from 'react'
import {  Link, useNavigate  } from "react-router-dom";
import "../Components/Styles/LoginNav.css"
import { Button } from 'bootstrap';
import "../images/logo.png"
import Cookies from 'js-cookie';


const UserNav = () => {

    
    const myname = Cookies.get("myname")

    const navigate =useNavigate();

    const handlelogout=()=>{
      
      Cookies.set("username","")
      Cookies.set("password","")
      Cookies.set("myname","")
      Cookies.set("myid","")
     
     navigate("/")

    }


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
   
    <Link to="/home" >  Home </Link>
    
      </div>

  <div className='loginnav'>
      <Link to="/myBooking">My Bookings</Link>
      </div>
     <div className='loginnav'>
      <Link to="/allHotels">All Hotels</Link>
      </div>
   <div className='loginnav'>
      <Link to="/" onClick={handlelogout}>Logout</Link>
    
      </div>

      

      </div>
      <hr />
      <h6>Hello, {myname}</h6>
      <hr />
  </>
  )
}

export default UserNav
