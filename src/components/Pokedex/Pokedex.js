import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon/Pokemon';

function Pokedex() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            //fetch(`https://pokeapi.co/api/v2/type/`)
            .then((response) => response.json())
            .then((eichhörnchen) => {
                // durch setData(eichhörnchen.results) wird in das objekt "eichhörnchen" in ein Array "results" umgeschrieben
                setData(eichhörnchen.results)
            })
    }, [])

    console.log(data);
    return (
        <div>
            {data.map((singlePokemon, index) => {
                console.log(singlePokemon.id);
                return <Pokemon key={index} name={singlePokemon.name} />
            })}
        </div>
    )
}

export default Pokedex;