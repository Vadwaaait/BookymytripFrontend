import React, { useEffect, useState } from 'react'
import UserNav from '../Components/UserNav'
import axios from 'axios';
import HotelShowCard from '../Components/HotelShowCard';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import "../Components/Styles/hotelcardStyle.css"
import { Link, useNavigate } from 'react-router-dom';
import { CookiesProvider, useCookies } from "react-cookie";
import Cookies from 'js-cookie';

const UserAllHotels = () => {



    const navigate=useNavigate();

        const handlehotelDetailsPage=(event,hotelid)=>{
            // navigate('/hoteldetailspage/'+hotelid)
            event.preventDefault();
          
            navigate('/hoteldetailspage');
        }

        // const[hotelsinfo,sethotelsinfo]=useState([]);
      
        const[hotelinfo, sethotelinfo]=useState([]);
          

              
        const[hotelidd, sethotelidd]=useState("");



        const fetchdata =()=>{
            fetch("http://localhost:8080/api/getAllHotels").then(resp=>resp.json()).then(resp=> {console.log(resp);
             sethotelinfo(resp)})
            
           
        }

        // componentDidMount and componentDidYpdate combination hook
        useEffect(()=>{
            fetchdata();
        },[])


        //cookie to handle state
        let hid;
        const handleee=(event)=>{
           
            
          console.log(event.target.value);
          hid=event.target.value
          Cookies.set('hotelidd', hid, { expires: 7 });
        }

  return (
       <>

        <UserNav/>


       {/* style to remove bullets */}

        <ul style={{listStyleType:"none"}}>
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
                            <button type='submit' value={item.hotelId} onClick={handleee} style={{color:"white", backgroundColor:"black", padding:"5px", borderRadius:"20px"}}>View Details</button>
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
