import logo from './logo.svg';
import './App.css';
import UserRegister from './Pages/UserRegister';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginNav from './Components/LoginNav';


function App() {
  return (


<Router>
      <LoginNav />
      <Routes>
        <Route path='/' exact element={UserRegister} />
        <Route path='/userRegister' element={<UserRegister/>} />
        
        
      </Routes>
    </Router>

  
  );
}

export default App;
