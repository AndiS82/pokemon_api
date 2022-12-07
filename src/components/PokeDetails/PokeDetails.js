import React, { useEffect, useState } from 'react';

function Details() {


    // const [imgData, setImgData] = useState([]);
    const [idData, setIdData] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${"clefairy"}`)
            .then((response) => response.json())
            .then((pokeData) => {
                // setImgData(pokeData.sprites.front_default)
                setIdData(pokeData)
                console.log(pokeData);
            })
    }, [])

    return (
        <aricle>
            <section>
                <p>Bild</p>
                <p className="pokeNameDetail">{idData.name}</p>
            </section>
            <section>
                <p> typenbeschreibung</p>
            </section>
            <section>
                <p>
                    attack and movement
                </p>
            </section>
        </aricle>
    )
}
export default Details