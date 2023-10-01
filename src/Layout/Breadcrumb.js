import React from "react"

function Breadcrumb({ deckName, deckId, pageId }) {

    if (pageId === "deck") {
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
    } else if (pageId === "study") {
        return (
            <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deckId}`}>{deckName}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>
            </>
        )
    } else if (pageId === "edit") {
        return (
            <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deckId}`}>{deckName}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit</li>               
                </ol>
            </nav>
            </>
        )
    }
}

export default Breadcrumb