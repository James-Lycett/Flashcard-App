import React from "react";
import { Link } from "react-router-dom"

function DeckView({ deck, deleteDeck }) {
    const deckLength = '' + deck.cards.length

    function deleteButtonHandler() {
        const confirm = window.confirm("Delete this deck? You will not be able to recover it.")
        if (confirm) {
            deleteDeck()
            window.location.reload(false)
        }
    }
    return (
        <>
        <li>
            <div className="card col-lg-8 offset-lg-1 w-100 mb-3">
                <div className="card-body">
                    <h5 className="card-title">{deck.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{`${deckLength} cards`}</h6>
                    <p className="card-text">{deck.description}</p>
                    <div className="d-flex justify-content-center justify-content-lg-end">
                        <Link to={`/decks/${deck.deck_id}`} className="card-link"><button type="button" className="btn btn-secondary">View</button></Link>
                        <Link to={`/decks/${deck.deck_id}/study`} className="card-link"><button type="button" className="btn btn-primary">Study</button></Link>
                        <button type="button" className="btn btn-danger card-link " onClick={deleteButtonHandler}>Delete</button>
                    </div>
                </div>
            </div>
        </li>
        </>
    )
}

export default DeckView