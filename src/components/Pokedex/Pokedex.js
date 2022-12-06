import React, { useEffect, useState } from 'react';

function Pokedex() {
    const [data, setData] = useState([]);
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            //fetch(`https://pokeapi.co/api/v2/type/`)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    }, [])
    console.log(data);

    const pokeArray = () => {
        data.map((singlePokemon) => {

            fetch(`https://pokeapi.co/api/v2/pokemon/${singlePokemon.name}`)
                .then((response) => response.json())
                .then((pokemon) => {
                    setPokemon(pokemon)
                })
        }
        )
    }
    console.log(pokemon)
}


export default Pokedex