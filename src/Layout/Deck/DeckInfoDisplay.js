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
        <h2>{deck.name}</h2>
        <p>{deck.description}</p>
        <Link to={`/decks/${deckId}/edit`}><button type="button">Edit</button></Link>
        <Link to={`/decks/${deckId}/study`}><button type="button">Study</button></Link>
        <Link to={`/decks/${deckId}/cards/new`}><button type="button">+ Add Cards</button></Link>
        <button onClick={deleteDeckButtonHandler}>Delete</button>
        </>        
    )
}

export default DeckInfoDisplay