import React from 'react'
import "../Components/Styles/LoginNav.css"
import "../Components/Styles/userRegistercss.css"
import { useState } from 'react';
import axios from "axios"
import LoginNav from '../Components/LoginNav';






const UserRegister = () => {


  // const [inputs, setInputs] = useState({});


  const [uname,setUname] = useState("");
  const [umail,setUmail] = useState("");
  const [upass,setUpass] = useState("");

const handleregister =(e) =>{
        
     
  
  e.preventDefault();


  axios.post("http://localhost:8080/api/user/save",{

  userName:uname,
  userEmail:umail,
  userPassword:upass
  }).then((response)=>{

    console.log(response)

    if(response.status===200 && response.data != "Some error has occured")
    {
      alert("user added successfully")
    }
    else{

      alert("Error occured, Email should be unique")
    }
  })
 



      // console.log(uname)
      // console.log(umail)
      // console.log(upass)

}




// const handleChange = (event) => {
//   const name = event.target.name;
//   const value = event.target.value;
//   setInputs(values => ({...values, [name]: value}))
// }



  return (
   <>

<LoginNav />
   
   <div className='registerform'>
   <form onSubmit={handleregister}>

      <table className='registertable'>

      <tr>
        <td>
          Name 
        </td>
        <td>:</td>
        <td >
          <input type="text" name='username' value={uname || ""}  required="required"     onChange={e=>setUname(e.target.value)}/>

        </td>
      </tr>

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
          <input type="submit" />
        </td>
      </tr>

      </table>

   </form>
   </div>
   </>
  )
}

export default UserRegister
