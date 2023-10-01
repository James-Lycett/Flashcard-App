import React from "react"

function Breadcrumb({ deckName, deckId, pageId }) {

    if (pageId === "Deck") {
        return (
            <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deckId}`}>{deckName}</a></li>                
                </ol>
            </nav>
            </>
        )
    } else if (pageId === "Create Deck") {
        return (
            <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>                    
                    <li className="breadcrumb-item active" aria-current="page">{pageId}</li>
                </ol>
            </nav>
            </>
        )
    } else {
        return (
            <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deckId}`}>{deckName}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{pageId}</li>
                </ol>
            </nav>
            </>
        )
    } 
}

export default Breadcrumb