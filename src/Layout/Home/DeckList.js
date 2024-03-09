import React from "react";
import DeckView from "./DeckView"
import { deleteDeck } from "../../utils/api";

function DeckList( { decks } ) {
    return (
        <>
        <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
            {decks.map((deck) => (
                <React.Fragment key={deck.deck_id}>
                <DeckView deck={deck} deleteDeck={() => deleteDeck(deck.deck_id)} />
                </React.Fragment>
            ))}
        </ul>
        </>
    )
}

export default DeckList