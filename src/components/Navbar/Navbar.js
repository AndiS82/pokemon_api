import { Link } from "react-router-dom"

function Navbar(props) {

    return (
        <section>
            <Link to={props.link}>{props.image}</Link>

            {/* <input id="input" type="text" placeholder="Enter Pokemon ID or Name" onChange={props.search} ></input> */}

            <button type="button" onClick={props.mood}>{ }</button>
        </section>
    )
}
export default Navbar