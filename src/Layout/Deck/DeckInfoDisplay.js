import React from "react";
import { Link, useHistory } from "react-router-dom"
import { deleteDeck } from "../../utils/api";

function DeckInfoDisplay( { deck, deckId } ) {
    const history = useHistory()   
    
    const deleteDeckButtonHandler = () => {
        async function deckDelete() {
            await deleteDeck(deckId)
            history.push("/")
        }
        const confirm = window.confirm("Delete this deck? You will not be able to recover it.")
        if (confirm) {
            deckDelete()
        }
    }
    
    return (
        <>
        <div className="mb-4">
            <h2>{deck.name}</h2>
            <p>{deck.description}</p>
            <div className="d-lg-flex justify-content-lg-start justify-content-center">
                <div className="d-lg-flex flex-lg-row">
                    <div className="d-flex my-3">
                        <Link to={`/decks/${deckId}/edit`}><button type="button" className="btn btn-secondary ml-2">Edit</button></Link>
                        <Link to={`/decks/${deckId}/cards/new`}><button type="button" className="btn btn-primary ml-2">+ Add Cards</button></Link>
                    </div>
                    <div className="d-flex my-3">
                        <Link to={`/decks/${deckId}/study`}><button type="button" className="btn btn-primary ml-2">Study</button></Link>
                        <button type="button" className="btn btn-danger ml-2" onClick={deleteDeckButtonHandler}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </>        
    )
}

export default DeckInfoDisplay