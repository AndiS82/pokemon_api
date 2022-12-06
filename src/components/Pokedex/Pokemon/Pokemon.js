

function Pokemon(props) {
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