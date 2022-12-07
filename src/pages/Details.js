import React, { useEffect, useState } from 'react';
import Pokemon from "../components/Pokedex/Pokemon/Pokemon"
import Logo from "../components/Logo/Logo";
import PokeDetails from '../components/PokeDetails/PokeDetails';
import Attacks from "../components/Attacks/Attacks"
import Movements from "../components/Movements/Movements"
import "./Details.css"
import { useParams } from 'react-router-dom';

function DetailView() {

    const [idData, setIdData] = useState([]);
    const [abilities, setAbilities] = useState([])
    const [power, setPower] = useState([])
    const [toggle, setToggle] = useState("hidden")
    const param = useParams()
    const name = param.name
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((pokeData) => {
                setIdData(pokeData)
                setAbilities(pokeData.abilities)
                setPower(pokeData.moves)
                // console.log(pokeData.moves[0].move.name);
            })
    }, [])
    return (
        < section >
            <Logo />
            <Pokemon key={idData.id} name={name} />
            <PokeDetails key={idData.id - 2} />
            {/* {console.log(toggle)} */}
            <button type="button" onClick={() => { toggle === "hidden" ? setToggle("shown") : setToggle("hidden") }
            }>Ablilities & Movements</button>
            <div className={toggle}>
                <div>
                    <h2>Abilities</h2>
                    {abilities.map((singleAbility, index) => {
                        return <Attacks key={index} attack={abilities[abilities.indexOf(singleAbility)].ability.name} />
                    })}
                </div>
                <div>
                    <h2>Movements</h2>
                    {power.map((singleMovement, index) => {
                        return <Movements key={index} movement={power[power.indexOf(singleMovement)].move.name} />
                    })}
                </div>
            </div>
            <Movements />
        </ section >
    )
}

export default DetailView;