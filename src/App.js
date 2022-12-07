import React from 'react';
import './App.css';
// import Pokedex from './components/Pokedex/Pokedex';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Menu from './pages/Menu'
import Details from './pages/Details'
// import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Details" element={<Details />} />
          {/* <Pokedex></Pokedex> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;