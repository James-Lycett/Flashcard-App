import React from "react";
import DeckView from "./DeckView"
import { deleteDeck } from "../../utils/api";

function DeckList( { decks } ) {
    return (
        <>
        <ul style={{listStyleType: "none"}}>
            {decks.map((deck, index) => (
                <DeckView key={index} deck={deck} deleteDeck={() => deleteDeck(deck.id)} />
            ))}
        </ul>
        </>
    )
}

export default DeckList