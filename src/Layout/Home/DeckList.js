import React from "react";
import CreateDeckButton from "./CreateDeck";
import DeleteDeck from "./DeleteDeck";
import DeckView from "./DeckView"

function DeckList({decks}) {
    return (
        <>
        <ul>
            {decks.map((deck, index) => (
                <DeckView key={index} deck={deck} index={index} deleteDeck={() => DeleteDeck()} />
            ))}
        </ul>
        </>
    )
}

export default DeckList