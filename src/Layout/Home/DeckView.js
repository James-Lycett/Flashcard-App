import React from "react";

function DeckView({deck, deleteDeck }) {
    function deleteButtonHandler() {
        deleteDeck()
        window.location.reload(false)
    }
    return (
        <>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">{deck.name}</h5>
            <p className="card-text">{deck.description}</p>
            <a href="/view" className="card-link"><button>View</button></a>
            <a href="/study" className="card-link"><button>Study</button></a>
            <a className="card-link"><button onClick={deleteButtonHandler}>Delete</button></a>
            </div>
        </div>
        </>
    )
}

export default DeckView