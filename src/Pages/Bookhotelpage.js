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
        
                 let pric=hotelinfoo.hotelPrice
                 setamount(pric)
                 setnoofrooms(1)

      },[])

      //-------------------------------------------------------------------------------------------------
      //Bookselecctionform logic

      let pric=hotelinfoo.hotelPrice
      const[noofrooms,setnoofrooms]=useState(1);
      const[amount,setamount]=useState(pric)
      const[noofpeople,setnoofpeople]=useState(1)
      const[fromdate,setfromdate]=useState();
      const[todate,settodate]=useState();
      const[noofdays,setnoofdays]=useState(0);
      const[mindate, setmindate]=useState();
      const[minfromDate, setminfromDate]=useState();
      const[check,setcheck]=useState(false)


      const setamt=()=>{
        setamount(pric)
      }

      const handlepeop=(event)=>{
        setnoofpeople(event.target.value)
      }
        
      const roomshandle=(event)=>{

          setnoofrooms(event.target.value)
          console.log(new Date())
          setamount(event.target.value*pric)
      }

      
      const handlefromdate=(event)=>{

        setfromdate(event.target.value)
        
        var mind=new Date(fromdate);
        mind.setDate(mind.getDate()+1)
       
        setmindate(mind)

        
      } 



      const handletodate=(event)=>{
        settodate(event.target.value)

        
        
      }

     const handlecheckout =()=>{

      console.log(noofpeople)

     }

     const submitcheckout=(event)=>{
        event.preventDefault()
        console.log("*********************************************************")
        console.log(fromdate)
        console.log(todate)
        console.log(noofdays)
        console.log(amount)
        console.log()
     }

     useEffect(()=>{
      var date1=new Date(fromdate);
      var date2=new Date(todate);

      var differenceInTime= date2-date1;

      var differenceInDays=differenceInTime/(1000*3600*24)

      // console.log("diff in days"+differenceInDays)

      // console.log(fromdate +"ignore")
      // console.log(todate +"ignore")
     

      console.log("asfassfdsdf"+ mindate)
      setnoofdays(differenceInDays)
     },[fromdate,todate,mindate])



     useEffect(()=>{
      
      var Date1= new Date();
      Date1.setDate(Date1.getDate()+1)
      console.log(Date1)
      setmindate(Date1)
      setnoofdays(1)
      setnoofrooms(1)
      setnoofpeople(1)
      setamount(hotelinfoo.hotelPrice)

     },[])



     const handleclickcheck=(event)=>{
      setamount(pric*noofdays*noofrooms);

      

     }

  return (
    <>

    <UserNav />
    <div className="bookingcard">
        <h1>Selected Hotel Details</h1>
        <hr />
        <table style={{margin:'auto'}}>
          <tr>
            <td><h2>Hotel</h2></td>
            <td><h2>:</h2></td>
            <td><h2>{hotelinfoo.hotelName}</h2></td>
          </tr>

          <tr>
            <td><h4>City</h4></td>
            <td><h4>:</h4></td>
            <td><h4>{hotelinfoo.hotelCity}</h4></td>
          </tr>

          <tr>
            <td><h4>Address</h4></td>
            <td><h4>:</h4></td>
            <td><h4>{hotelinfoo.hotelAddress}</h4></td>
          </tr>

          <tr>
            <td><h4 style={{color:"green"}}>Price</h4></td>
            <td><h4 style={{color:"green"}}>:</h4></td>
            <td><h4 style={{color:"green"}}>{hotelinfoo.hotelPrice}</h4></td>
          </tr>
        </table>
    
  
    <hr />
    <hr />
        <div className="Bookselectionform">
          
          <form onSubmit={submitcheckout}>
            <table>
              <tr>
                <td>Number of Rooms</td>
                <td>:</td>
                <td>
                <input type="number" name="roomsno" id=""  max={5} min={1} defaultValue={1} onChange={roomshandle} style={{width:"100%", textAlign:"center", borderRadius:"20px"} } required="required" disabled={check}/>
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
                  <input type="number" name="peopleno" onChange={handlepeop} disabled={check} id="" max={parseInt(noofrooms)*2} min={1} defaultValue={1} style={{width:"100%", textAlign:"center",borderRadius:"20px"}} required="required" />
                  </td>
                </tr>
                  <tr>
                    <td>From Date</td>
                    <td>:</td>
                    <td>
                        <input type="date" style={{borderRadius:"20px"}} required="required" onChange={handlefromdate} min={minfromDate} disabled={check}/>
                    </td>
                  </tr>

                  <tr>
                    <td>To Date</td>
                    <td>:</td>
                    <td>
                        <input type="date" style={{borderRadius:"20px"}} required="required" onChange={handletodate} defaultValue={fromdate} min={fromdate} disabled={check}/>
                    </td>
                  </tr>

            </table>
                  <br />
                  <br />
              <input type="checkbox" name="" id="" required="required" onClick={handleclickcheck} onChange={()=>{setcheck(!check)}} /> <small>click here to agree</small>
            <hr />
        <hr />


        <h3>Total  Amount to be paid</h3>
        <h4 style={{color:"green"}} onLoad={setamt}>₹ {amount}</h4>

        
          <button style={{color:"white", backgroundColor:"black", padding:"5px", borderRadius:"20px"}} onClick={handlecheckout} >checkout</button>

          </form>

            
        </div>

       <h5>Number of days : {noofdays}</h5>
        
       

    </div>

      
    
    </>
  )
}

export default Bookhotelpage
