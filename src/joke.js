import React from "react";

export default function Joke (props){

    const [isShown, setIsShown] = React.useState(false)

    function toggleShown () {
        setIsShown(prevShown => !prevShown)
    }

    return(
        <div className="jcontainer">
            {props.setup && <p className="setup">{props.setup}</p>}
            {isShown && <p className="punchline">{props.punchline}</p>}
            <button 
                onClick={toggleShown}>
                    Show punchline
                </button>
        </div>
    )
}