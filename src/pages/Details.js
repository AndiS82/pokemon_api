import React, { useEffect, useState } from 'react';
import Pokemon from "../components/Pokedex/Pokemon/Pokemon"
import Logo from "../components/Logo/Logo";
import PokeDetails from '../components/PokeDetails/PokeDetails';
import Attacks from "../components/Attacks/Attacks"
import Movements from "../components/Movements/Movements"

function DetailView() {

    // const [imgData, setImgData] = useState([]);
    const [idData, setIdData] = useState([]);
    const [abilities, setAbilities] = useState([])
    const Result = []
    // { console.log(idData.abilities[0].ability.name) }
    // { console.log(idData.moves) }
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${"clefairy"}`)
            .then((response) => response.json())
            .then((pokeData) => {
                // setImgData(pokeData.sprites.front_default)
                setIdData(pokeData)
                setAbilities(pokeData.abilities)
                // console.log(pokeData);
            })
    }, [])


    return (

        < section >
            <Logo />
            <Pokemon key={idData.id} name={"clefairy"} />
            <PokeDetails key={idData.id - 2} />
            {abilities.map((singleAbility, index) => {
                return <Attacks key={index} abilities={singleAbility.ability.name} />
            })}
            {console.log(abilities[0])}
            <Movements />
        </ section>
    )
}

export default DetailView;