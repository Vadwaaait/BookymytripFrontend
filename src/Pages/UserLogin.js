import React, { useState } from 'react'
import LoginNav from '../Components/LoginNav'

const UserLogin = () => {


  const [umail,setUmail] = useState("");
  const [upass,setUpass] = useState("");



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
          <input type="submit" style={{color:"white" , backgroundColor:"black" , borderRadius:"20px" , padding:"5px"}}/>
        </td>
      </tr>

      </table>

   </form>
   </div>
    </>
  )
}

export default UserLogin
