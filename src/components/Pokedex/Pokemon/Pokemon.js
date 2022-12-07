import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pokedex from '../Pokedex';

function Pokemon(props) {

    const [imgData, setImgData] = useState([]);
    const [idData, setIdData] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then((response) => response.json())
            .then((pokeData) => {
                setImgData(pokeData.sprites?.front_default)
                setIdData(pokeData.id)
                // console.log(pokeData);
            })
    }, [])
    console.log("test")
    return (
        <div className="imgBox">
            <Link to={`/details/${props.name}`}>
                <div>
                    <p>test pokemon</p>
                    <img src={imgData}></img>
                    <section className="pokeData">
                        <p className="pokeNumber">{idData < 10 ? `#00` : idData < 100 ? `#0` : `#`}{idData}</p>
                        <p className="pokeName">{props.name}</p>
                    </section>
                </div>
            </Link>
        </div>
    )
}

export default Pokemon;