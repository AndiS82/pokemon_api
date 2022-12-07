import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon/Pokemon';
import Navbar from '../Navbar/Navbar'
import burger from '../../img/burger.png'
import mood from '../../img/mood.png'
import { Link } from 'react-router-dom';


function Pokedex() {
    const [data, setData] = useState([]);
    const [navtog, setNavtog] = useState("shown")
    const [inputname, setInputname] = useState("")
    const [navtog2, setNavtog2] = useState("hidden")
    const [data2, setData2] = useState([])
    const [useAbleData, setuseAbleData] = useState();

    // const NavChange = (() => {
    //     (navtog === "shown" ? setNavtog("hidden") : setNavtog("shown"))
    //         (navtog2 === "shown" ? setNavtog2("hidden") : setNavtog2("shown"))
    //     if (document.getElementById("input").value !== "") {
    //         // { onInput= (e) => setInputname(document.getElementById("input").e.target.value.toLowerCase()) }
    //     }
    // }
    // )
    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${inputname}/`)
    //         .then((response) => response.json())
    //         .then((poki) => {
    //             setData2(poki.results)
    //         })
    // }, [inputname])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            //fetch(`https://pokeapi.co/api/v2/type/`)
            .then((response) => response.json())
            .then((eichhörnchen) => {
                // durch setData(eichhörnchen.results) wird in das objekt "eichhörnchen" in ein Array "results" umgeschrieben
                setData(eichhörnchen.results)
                setuseAbleData(eichhörnchen.results)
            })
    }, [])

    useEffect(() => {
        if (inputname === "") {
            setuseAbleData(data);
        }

        let length = (inputname).length;
        setuseAbleData(data.filter(el => el.name.slice(0, length).toLowerCase() === (inputname).toLowerCase().replaceAll(" ", "-")));
        // console.log(useAbleData)
    }, [inputname])

    if (useAbleData === undefined) {

        return;
    }

    return (
        <div>
            <section id="topSection">
                <Link to={"/menu"}>
                    <img src={burger} />
                </Link>
                <input id="input" type="text" placeholder="Enter Pokemon ID or Name" onInput={e => setInputname(e.target.value)}></input>

                {/* <button type="button" onClick={}>{mood}</button> */}
            </section>
            <p>test pokedex</p>
            {/* <div className={navtog2}>
                <Pokemon key={inputname} name={inputname} />
            </div> */}
            <div className={navtog}> {useAbleData.map((singlePokemon, index) => {
                // console.log(navtog)
                // console.log(singlePokemon)
                return <Pokemon key={index} name={singlePokemon.name} />
            })}
            </div>
        </div>
    )
}
export default Pokedex;