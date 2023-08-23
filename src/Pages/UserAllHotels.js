import React, { useEffect, useState } from 'react'
import UserNav from '../Components/UserNav'
import axios from 'axios';
import HotelShowCard from '../Components/HotelShowCard';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import "../Components/Styles/hotelcardStyle.css"
import { Link, useNavigate } from 'react-router-dom';
import { CookiesProvider, useCookies } from "react-cookie";

const UserAllHotels = () => {



    const navigate=useNavigate();

        const handlehotelDetailsPage=(event,hotelid)=>{
            // navigate('/hoteldetailspage/'+hotelid)
            event.preventDefault();
            
            navigate('/hoteldetailspage');
        }


        // const[hotelsinfo,sethotelsinfo]=useState([]);
      
        const[hotelinfo, sethotelinfo]=useState([]);
          



        const fetchdata =()=>{
            fetch("http://localhost:8080/api/getAllHotels").then(resp=>resp.json()).then(resp=> {console.log(resp);
             sethotelinfo(resp)})
            
           
        }


        useEffect(()=>{
            fetchdata();
        },[])

    

  return (
       <>

        <UserNav/>
       
        <ul>
            {
                hotelinfo.map((item,i)=>{
                    return (
                        <div className='hotelcard'>
                    <li key={i} >
                        <h2>{item.hotelName}</h2>
                        <h4>City : {item.hotelCity}</h4>
                        <h5>Address :{item.hotelAddress}</h5>
                        <h5>Rooms available : {item.noOfRooms}</h5>
                        <h4 style={{color:"green"}}>Price : ₹ {item.hotelPrice}</h4>
                        
                        <form onSubmit={handlehotelDetailsPage}>
                            <button type='submit' value={item.hotelId}>View Details</button>
                        </form>
                        </li>
                        </div>
                    )})
            }

        </ul>
      


    </>
  )
}

export default UserAllHotels
