import React, { useState } from 'react'
import LoginNav from '../Components/LoginNav'
import axios from 'axios';

const AdminSignUp = () => {


        const[aname,setAname]=useState("");
        const[Amail,setAmail]=useState("");
        const[apass,setupass]=useState("");


        const handleAdminreg=()=>{


            
            axios.post("http://localhost:8080/api/admin/save",{

            adminName:aname,
            adminEmail:Amail,
            adminPassword:apass
  }).then((res)=>{

    console.log(res)

    if(res.status===200 && res.data != "Some error has occured")
    {
      alert("user added successfully")
    }
    else{

      alert("Error occured, Email should be unique")
    }
    
  })

        }

  return (
    <>
        <LoginNav/>

        <h1 style={{marginLeft:"40%", color:"red"}}>Admin Register</h1>

        <div className='registerform'>
   <form onSubmit={handleAdminreg}>

      <table className='registertable'>

      <tr>
        <td>
          Name 
        </td>
        <td>:</td>
        <td >
          <input type="text" name='username' value={aname || ""}  required="required"     onChange={e=>setAname(e.target.value)}/>

        </td>
      </tr>

      <tr>
        <td>
          Email Id 
        </td>
        <td>:</td>
        <td>
          <input type="email" name="mailid" required="required"  value={Amail || ""}    onChange={e=>setAmail(e.target.value)}/>

        </td>
      </tr>


      <tr>
        <td>
          Password  
        </td>
        <td>:</td>
        <td>
          <input type="password" required="required" name="pass" value={apass || "" }    onChange={e=>setupass(e.target.value)}/>

        </td>
      </tr>


      <tr>
        <td>

        </td>
        <td></td>
        <td>
          <input type="submit" />
        </td>
      </tr>

      </table>

   </form>
   </div>
    </>
  )
}

export default AdminSignUp
