import React, { useEffect, useState } from 'react';

function Pokedex() {
    const [data, setData] = useState([]);
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            //fetch(`https://pokeapi.co/api/v2/type/`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results)
                console.log(data.results[0].name);
            })
            .then(() => {
                data.map((singlePokemon) => {
                    console.log(singlePokemon);

                    fetch(`https://pokeapi.co/api/v2/pokemon/${singlePokemon.name}`)
                        .then((response) => response.json())
                        .then((pokemon) => {
                            setPokemon(pokemon)
                        })
                })
            })
    }, [])
    console.log(data);
    console.log(pokemon)
}


export default Pokedex