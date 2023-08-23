import React from 'react'
import UserNav from '../Components/UserNav'
import "../Components/Styles/hoteldetails.css"

const Hoteldetails = () => {
  return (
    <>
     <UserNav /> 

        <div className="deschotel">
            <h1>Hotel Name</h1>
            <h4>Hotel city</h4>
            <h3>Hotel Address</h3>
            <h3>Price</h3>
            <h3>Hotel Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione ullam corrupti non ea inventore ducimus rerum recusandae iste iure accusamus unde, commodi asperiores, error quasi nulla saepe eum sunt.</p>

            </div>
    </>
  )
}

export default Hoteldetails
