import React from "react";

function DeckView({deck, deleteDeck, key }) {
    function deleteButtonHandler() {
        const confirm = window.confirm("Delete this deck? You will not be able to recover it.")
        if (confirm) {
            deleteDeck()
            window.location.reload(false)
        }
    }
    return (
        <>
        <li key={key}>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
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