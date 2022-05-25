import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./Components/Appbar"; 
import Index from "./Pages/Home"; 
import User from "./Pages/User"; 
import Dashboard from "./Pages/Dashboard"; 
import Exercises from "./Pages/Exercises"; 
import Error from "./Pages/Error"; 
import Box from '@mui/material/Box';
import './Components/Style.css'


function App() {
  

  return (
    <> 
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route  path="/" element={<Index/>}></Route>
          <Route path="user" element={<User/>}></Route>
          <Route  path="dashboard" element={<Dashboard/>}></Route>
          <Route  path="exercise" element={<Exercises/>}></Route>
          <Route  path="*" element={<Error/>}></Route>
                </Routes>
         <Box className = 'footer'>
      
      <ul className="list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
      </ul>
      <p className="copyright">Fitness Users @ 2022</p>

    </Box>       

      </BrowserRouter>
    </>
  );
}

export default App;
