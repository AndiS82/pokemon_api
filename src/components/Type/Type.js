import "./Type.css"

function Type(props) {

    return (
        <div className="typeBubble">
            <p className={props.type}>{props.type}</p>
        </div>
    )
};

export default Type;