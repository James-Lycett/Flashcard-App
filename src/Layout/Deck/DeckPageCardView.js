import React from "react";
import { Link, useParams } from "react-router-dom"
import { deleteCard } from "../../utils/api";

function DeckPageCardView( { card, key } ) {
    const params = useParams()
    const deckId = params.deckId

    function deleteCardButtonHandler() {
        async function cardDelete() {
            try {
                await deleteCard(card.id)
            } catch (error) {
                console.log(error)
            }
        }
        const confirm = window.confirm("Delete this card? You will not be able to recover it.")
        if (confirm) {
            cardDelete()
            window.location.reload(false)
        }
    }

    return (
        <>
        <li key={key}>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                <p className="card-text">{card.front}</p>
                <p className="card-text">{card.back}</p>
                <Link to={`/decks/${deckId}/cards/${card.id}/edit`}><button type="button">Edit</button></Link>
                <button onClick={deleteCardButtonHandler}>Delete</button>
                </div>
            </div>
        </li>
        </>
    )
}

export default DeckPageCardView