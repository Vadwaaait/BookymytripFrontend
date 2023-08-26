import React, { useEffect } from 'react'
import UserNav from '../Components/UserNav'
import Cookies from 'js-cookie'

const HomePage = () => {


    const username=Cookies.get("username")
    const password=Cookies.get("password")
    const myname=Cookies.get("myname")
    const myid=Cookies.get("myid")

    useEffect(()=>{

      console.log(username);
      console.log(password)


    },[])

  return (
    <>
    
    <UserNav />
    
    </>
    
  )
}

export default HomePage
