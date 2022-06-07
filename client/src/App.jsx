import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import YourDay from "./pages/YourDay";
import Dashboard from "./pages/Dashboard";
import ComponentTester from "./pages/ComponentTester";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/YourDay" element={<YourDay />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ct" element={<ComponentTester />} />
        <Route
          path="*"
          element={
            <h1 className="text-center text-3xl font-bold">Wrong Route!</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
