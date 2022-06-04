import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import YourDay from "./pages/YourDay";
import Dashboard from "./pages/Dashboard";
// Components
// import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/YourDay' element={
          <YourDay/>
          }/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='*' element={
          <h1 className="text-center text-3xl font-bold">Wrong Route!</h1>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
