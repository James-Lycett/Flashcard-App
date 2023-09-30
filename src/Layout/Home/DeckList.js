import React from "react";
import DeckView from "./DeckView"
import { deleteDeck } from "../../utils/api";

function DeckList({decks}) {
    return (
        <>
        <ul>
            {decks.map((deck, index) => (
                <DeckView key={index} deck={deck} index={index} deleteDeck={() => deleteDeck(deck.id)} />
            ))}
        </ul>
        </>
    )
}

export default DeckList