import React, { useEffect } from 'react'
import UserNav from '../Components/UserNav'
import Cookies from 'js-cookie'
import SearchComponent from '../Components/SearchComponent'
import { useNavigate } from 'react-router-dom'
import "../Components/Styles/searchFunc.css"
const HomePage = () => {


    const username=Cookies.get("username")
    const password=Cookies.get("password")
    const myname=Cookies.get("myname")
    const myid=Cookies.get("myid")


    const navigate= useNavigate()

    
    useEffect(()=>{

      if(username==="")
      {

          navigate("/")
          
      }


    },[])

  return (
    <>
    
    <UserNav />
    <SearchComponent mydata={myname}/>
    
    </>
    
  )
}

export default HomePage
