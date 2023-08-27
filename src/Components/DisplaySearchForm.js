import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
const DisplaySearchForm = (props) => {



    const[HotelName,setHotelName]=useState("")



    const navigate = useNavigate();

    const bynamesearch=()=>{
        Cookies.set("hotname",HotelName)
        navigate("/bynamesearch")
    }


    const handleHotelName=(e)=>{
                setHotelName(e.target.value)
                console.log(HotelName)
    }

    if(props.data==="hotelnamesearch")
    {
  return (
<>
    <div className='searchByName' style={{marginTop:"20px"}}>
        <form >
                <table>
                    <tr>
                        <td>
                            <h5>Hotel Name</h5>
                        </td>
                        <td>:</td>
                        <td>
                            <input type="text" onChange={handleHotelName}/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td></td>
                        <td>
                        
                            <button style={{marginTop:"20px", backgroundColor:"black" , color:"white" , padding:"10px", borderRadius:"10px"}} onClick={bynamesearch}>Search</button>
                        </td>
                    </tr> 
                </table>
        </form>
    </div>
    </>
  )
}



}

export default DisplaySearchForm
