import React from "react";
import DeckView from "./DeckView"
import { deleteDeck } from "../../utils/api";

function DeckList( { decks } ) {
    return (
        <>
        <ul style={{listStyleType: "none"}}>
            {decks.map((deck) => (
                <React.Fragment key={deck.id}>
                <DeckView deck={deck} deleteDeck={() => deleteDeck(deck.id)} />
                </React.Fragment>
            ))}
        </ul>
        </>
    )
}

export default DeckList