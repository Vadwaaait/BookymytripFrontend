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
        
      </Routes>



    
</Router>

    
    </>
  );
}

export default App;
