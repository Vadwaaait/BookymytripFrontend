import React, { useEffect, useState } from 'react'
import UserNav from '../Components/UserNav'
import axios from 'axios';
import HotelShowCard from '../Components/HotelShowCard';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
const UserAllHotels = () => {


        // const[hotelsinfo,sethotelsinfo]=useState([]);
      
        const[hotelinfo, sethotelinfo]=useState([]);
          



         const fetchdata=()=> axios.get("http://localhost:8080/api/getAllHotels").then(res=>sethotelinfo(res.data))

    useEffect(()=>{
        fetchdata()
    },[])


  return (
       <>

        <UserNav/>
       
       {

        hotelinfo.map((data,index)=>{
            <h1 key={index}>
                    {data.hotelName
                    }
            </h1>
        })

       }
        


    </>
  )
}

export default UserAllHotels
