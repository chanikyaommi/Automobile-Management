import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard'; 
import About from './About'; 
import Contact from './Contact'; 
import SelectedCar from './SelectedCar'; // Import the SelectedCar component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/selected-car/:carName" element={<SelectedCar />} />
      </Routes>
    </Router>
  );
}

export default App;