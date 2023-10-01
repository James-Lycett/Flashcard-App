import React from "react";
import { Link } from "react-router-dom"

function DeckPageCardView( { card, key } ) {

    function deleteCardButtonHandler() {
        console.log("delete card btn pressed")
    }

    return (
        <>
        <li key={key}>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                <p className="card-text">{card.front}</p>
                <p className="card-text">{card.back}</p>
                <Link to={`/decks/${card.id}/edit`}><button type="button">Edit</button></Link>
                <button onClick={deleteCardButtonHandler}>Delete</button>
                </div>
            </div>
        </li>
        </>
    )
}

export default DeckPageCardView