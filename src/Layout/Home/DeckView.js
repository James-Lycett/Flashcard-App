import React from "react";

function DeckView({deck, deleteDeck }) {
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
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{`${deckLength} cards`}</h6>
                <p className="card-text">{deck.description}</p>
                <a href={`/decks/${deck.id}`} className="card-link"><button>View</button></a>
                <a href={`/decks/${deck.id}/study`} className="card-link"><button>Study</button></a>
                <button onClick={deleteButtonHandler}>Delete</button>
                </div>
            </div>
        </li>
        </>
    )
}

export default DeckView