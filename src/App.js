import logo from './logo.svg';
import './App.css';
import UserRegister from './Pages/UserRegister';
import UserHome from './Pages/UserHome';
import UserAllHotels from './Pages/UserAllHotels';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import LoginNav from './Components/LoginNav';
import UserLogin from './Pages/UserLogin';
import AdminLogin from './Pages/AdminLogin';
import AdminSignUp from './Pages/AdminSignUp';
import HomePage from './Pages/HomePage';
import Hoteldetails from './Pages/Hoteldetails';
import Bookhotelpage from './Pages/Bookhotelpage';
import BynameSearch from './Pages/BynameSearch';
import HotelCitySearch from './Pages/HotelCitySearch';
import MyBookings from './Pages/MyBookings';

function App() {
  return (
<>
<Router>

    
      <Routes>
        <Route path='' exact element={<UserLogin/>} />
        <Route path='/userRegister' element={<UserRegister/>} />
        <Route path='/AdminLogin' element={<AdminLogin/>} />
        <Route path='/AdminRegister' element={<AdminSignUp/>} />
        <Route path='/UserHome' element={<UserHome/>} />  
        <Route path='/allHotels' element={<UserAllHotels/>} /> 
        <Route path='/home' element={<HomePage/>} /> 
        
         <Route path='/hoteldetailspage' element={<Hoteldetails/>} /> 
         <Route path='/bookhotelpage' element={<Bookhotelpage/>} />
         <Route path='/myBooking' element={<MyBookings/>} /> 
         <Route path='/bynamesearch' element={<BynameSearch/>} /> 

         <Route path='/HotelCitySearch' element={<HotelCitySearch/>} />
      </Routes>



    
</Router>

    
    </>
  );
}

export default App;
