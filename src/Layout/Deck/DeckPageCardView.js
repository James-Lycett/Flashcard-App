import React from "react";
import { Link, useParams } from "react-router-dom"
import { deleteCard } from "../../utils/api";

function DeckPageCardView( { card } ) {
    const params = useParams()
    const deckId = params.deckId

    function deleteCardButtonHandler() {
        async function cardDelete() {
            try {
                await deleteCard(card.card_id)
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
            <div className="card col-10 w-100" style={{width: "18rem"}}>
                <div className="card-body">
                <div className="row mb-3">
                    <div className="col-6">
                        <p className="card-text">{card.front}</p>
                    </div>
                    <div className="col-6">
                        <p className="card-text">{card.back}</p>
                    </div>
                </div>
                <div className="row">
                <Link to={`/decks/${deckId}/cards/${card.card_id}/edit`} className="card-link"><button type="button" className="btn btn-secondary">Edit</button></Link>
                <button type="button" className="btn btn-danger card-link" onClick={deleteCardButtonHandler}>Delete</button>
                </div>
                </div>
            </div>        
        </>
    )
}

export default DeckPageCardView