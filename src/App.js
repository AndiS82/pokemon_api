import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //fetch(`https://pokeapi.co/api/v2/pokemon/`)
    fetch(`https://pokeapi.co/api/v2/type/`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  console.log(data);

  return (
    <div className="App">

    </div>
  );
}

export default App;
