import React, { useState } from 'react'
import LoginNav from '../Components/LoginNav'
import Cookies from 'js-cookie';
import axios from 'axios';

const UserLogin = () => {


  const [umail,setUmail] = useState("");
  const [upass,setUpass] = useState("");



  const handleLoginClick=(event)=>{

       event.preventDefault();

       axios.post("http://localhost:8080/api/user/login",{

       
       userEmail:umail,
       userPassword:upass
       },
       {headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
       },
           auth: {
         username: umail,
          password: upass 
     }}).then((response)=>{
     
         console.log(response)
     
         if(response.status===200 )
         {
           alert("successfull")
         }
         
       }).catch(err => alert("Error, No Such Username or Password"))


     
          
  }


  return (
    <>
      <LoginNav/>

      <h1 style={{ color:"red" , textAlign:"center"}} >User Login</h1>
      <hr />
      <div className='registerform'>
   <form className='indexformstyle'>

      <table className='registertable' >

     

      <tr>
        <td>
          Email Id 
        </td>
        <td>:</td>
        <td>
          <input type="email" name="mailid" required="required"  value={umail || ""}    onChange={e=>setUmail(e.target.value)}/>

        </td>
      </tr>


      <tr>
        <td>
          Password  
        </td>
        <td>:</td>
        <td>
          <input type="password" required="required" name="pass" value={upass || "" }    onChange={e=>setUpass(e.target.value)}/>

        </td>
      </tr>


      <tr>
        <td>

        </td>
        <td></td>
        <td>
          <input type="submit"  onClick={handleLoginClick} style={{color:"white" , backgroundColor:"black" , borderRadius:"20px" , padding:"5px"}}/>
        </td>
      </tr>

      </table>

   </form>
   </div>
    </>
  )
}

export default UserLogin
