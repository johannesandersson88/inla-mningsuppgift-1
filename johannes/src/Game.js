import React from 'react';


function Game(props) {

    return (
        <form>
            {/* Html kod som tar emot informationen och skickas ut i Props. */}
            <h1>Dice Game!</h1>
            <p>Your Score: {props.user}</p>
            <p>CPU Score: {props.computer}</p>
            <h3>Result - {props.winner}</h3>
            <div className="btn-placeholder">
                <button className="btn" type="button" onClick={props.handleClick} >play</button>
            </div>
            <button className="btn reload" type="button" onClick={props.newGame}>NewGame</button>

        </form>


    )

}



export default Game;