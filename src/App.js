
import './App.css';
import Login from "./Components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';
import Home from './Components/Home';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
      </Router>
    
   
    
    
    
    </>
  );
}

export default App;
