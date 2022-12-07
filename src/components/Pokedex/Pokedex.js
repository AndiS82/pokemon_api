import React, { useEffect, useState } from 'react';

function Pokedex() {
    const [data, setData] = useState([]);
    const [pokedexEmpty, setPokedexEmpty] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            //fetch(`https://pokeapi.co/api/v2/type/`)
            .then((response) => response.json())
            .then((eichhörnchen) => {
                // durch setData(eichhörnchen.results) wird in das objekt "eichhörnchen" in ein Array "results" umgeschrieben
                setData(eichhörnchen.results)
            })
        //.then(() => {
        // data.map((singlePokemon) => {
        //     //data.map geht das komplette Array durch und nimmt von jedem Element im Array den Wert und gibt diesen weiter an den fetch-Befehl
        //     console.log(singlePokemon);
        //     fetch(`https://pokeapi.co/api/v2/pokemon/${singlePokemon.name}`)
        //         .then((response) => response.json())
        //         .then((pokemon) => {
        //             setPokedexEmpty(pokemon)
        //             console.log(pokemon);
        //         })
        //     return;
        //     })
        // })
    }, [])

    function GetPokePic(pokeName) {
        const [name, setName] = useState([]);
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((response) => response.json())
            .then((newName) => {
                setName(newName)
                console.log(newName);
            })
        return name.sprites.front_default
    }


    console.log(data);
    console.log(pokedexEmpty);
    return (
        <div>
            {data.map((Pokemon) => {
                return <Pokemon key={Pokemon.id} img={GetPokePic(Pokemon.name)} name={Pokemon.name} number={Pokemon.id} />
            })} <p>test</p>
        </div>
    )
}

export default Pokedex;