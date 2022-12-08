import React, { useState } from 'react';
import './App.css';
// import Pokedex from './components/Pokedex/Pokedex';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Menu from './pages/Menu'
import Details from './pages/Details'
import Mode from "./img/mood.png"


function App() {

  const [toggle, setToggle] = useState("bgcLight")

  const toggleFunction = () => {
    if (toggle === "bgcDark") {
      setToggle("bgcLight");
      document.getElementById("PokeCardContainer").classList.add("bkgYellow");
      document.getElementById("PokeCardContainer").classList.remove("bkgDark");
    } else if (toggle === "bgcLight") {
      setToggle("bgcDark");
      document.getElementById("PokeCardContainer").classList.add("bkgDark");
      document.getElementById("PokeCardContainer").classList.remove("bkgYellow");
    }
  }

  return (
    <div className={toggle}>
      <Router>
        <button type="button" onClick={toggleFunction} className="modeButton"><img src={Mode} /></button>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;