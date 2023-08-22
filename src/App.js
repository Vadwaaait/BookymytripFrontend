import logo from './logo.svg';
import './App.css';
import UserRegister from './Pages/UserRegister';
import UserHome from './Pages/UserHome';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import LoginNav from './Components/LoginNav';


function App() {
  return (
<>
<Router>

    
      <Routes>
        <Route path='/' exact element={UserRegister} />
        <Route path='/userRegister' element={<UserRegister/>} />

        <Route path='/UserHome' element={<UserHome/>} />  
        
      </Routes>



    
</Router>

    
    </>
  );
}

export default App;
