import React from "react";
import CreateDeckButton from "./CreateDeckButton";
import DeleteButton from "./DeleteButton";

function DeckCard() {
    {/* 
    - needs database calls in <h5> and <p> components
    - needs delete button functionality
    */}
    return (
        <>
        <div class="card" style={{width: "18rem;"}}>
            <div class="card-body">
            <h5 class="card-title">Deck Title{/* db.json.name */}</h5>
            <p class="card-text">Deck description...{/* db.json.description */}</p>
            <a href="/view" class="card-link"><button>View</button></a>
            <a href="/study" class="card-link"><button>Study</button></a>
            <a class="card-link"><button>Delete</button></a>
            </div>
        </div>
        </>
    )
}

export default DeckCard