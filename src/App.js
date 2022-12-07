import React from 'react';
import './App.css';
// import Pokedex from './components/Pokedex/Pokedex';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Menu from './pages/Menu'
import Details from './pages/Details'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;