import React from "react";
import DeleteButton from "./DeleteDeck";

function DeckView({deck}) {
    {/* 
    - needs database calls in <h5> and <p> components
    - needs delete button functionality
    */}    
    return (
        <>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">{deck.name}</h5>
            <p className="card-text">{deck.description}</p>
            <a href="/view" className="card-link"><button>View</button></a>
            <a href="/study" className="card-link"><button>Study</button></a>
            <a className="card-link"><button>Delete</button></a>
            </div>
        </div>
        </>
    )
}

export default DeckView