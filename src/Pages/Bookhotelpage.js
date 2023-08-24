import React, { useEffect, useState } from 'react'
import UserNav from '../Components/UserNav'
import Cookies from 'js-cookie';
import "../Components/Styles/bookingcard.css"
import "../Components/Styles/Bookselectionform.css"

const Bookhotelpage = () => {





  //----------------------------------------------------------


    const[hotelinfoo,sethotelinfoo]=useState([])

    //js-cookies
    let hotelinfor=Cookies.get('hotelidd');

    const fetchdata=()=>{

        fetch("http://localhost:8080/api/user/hotel/id/"+hotelinfor).then(resp=>resp.json()).then(resp=> {console.log(resp);
                 sethotelinfoo(resp)});
            
            }

      useEffect(()=>{
        fetchdata();

      },[])

      //-------------------------------------------------------------------------------------------------
      //Bookselecctionform logic

        let pric=hotelinfoo.hotelPrice
      const[noofrooms,setnoofrooms]=useState(1);
      const[amount,setamount]=useState(pric)

      

      const roomshandle=(event)=>{

          setnoofrooms(event.target.value)
          console.log(pric)
          setamount(event.target.value*pric)
      }

      
 

  return (
    <>

    <UserNav />
    <div className="bookingcard">
        <h1>Selected Hotel Details</h1>
    <h2>Selected Hotel : {hotelinfoo.hotelName}</h2>
    <h4>City : {hotelinfoo.hotelCity}</h4>
    <h4>Address : {hotelinfoo.hotelAddress}</h4>
    <h4 style={{color:"green"}}>Price : ₹{hotelinfoo.hotelPrice}</h4>
    <hr />
    <hr />
        <div className="Bookselectionform">
          
          <form>
            <table>
              <tr>
                <td>Number of Rooms</td>
                <td>:</td>
                <td>
                <input type="number" name="roomsno" id="" max={5} min={1} defaultValue={1} onChange={roomshandle}/>
                  </td>
              </tr>
              <tr>
               
              </tr>

                <tr>
                  <td>
                    Number of People
                  </td>
                  <td>:</td>
                  <td>
                    {/* max no of rooms * 2 people can book the hotel; */}
                  <input type="number" name="peopleno" id="" max={parseInt(noofrooms)*2} min={1} defaultValue={1}/>
                  </td>
                </tr>
                  <tr>
                    <td>

                    </td>
                  </tr>

            </table>

          </form>

            
        </div>


        <hr />


        <h3>Total  Amount to be paid</h3>
        <h4 style={{color:"green"}}>₹ {amount}</h4>

    </div>

      
    
    </>
  )
}

export default Bookhotelpage
