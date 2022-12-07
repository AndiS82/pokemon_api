import React, { useEffect, useState } from 'react';

function Pokemon(props) {

    const [pokemonData, setName] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then((response) => response.json())
            .then((newName) => {
                setName(pokemonData)
                console.log(newName);
            })
    }, [])

    return (
        <div className="imgBox">
            <img src={props.img}></img>
            <section className="pokeData">
                <p className="pokeNumber">{props.number < 10 ? `#00` : props.number < 100 ? `#0` : `#`}{props.number}</p>
                <p className="pokeName">{props.name}</p>
            </section>
        </div>
    )
}

export default Pokemon;