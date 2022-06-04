import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import YourDay from "./pages/YourDay";
import Dashboard from "./pages/Dashboard";
// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
