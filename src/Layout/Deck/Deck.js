import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { readDeck } from "../../utils/api";
import Breadcrumb from "./Breadcrumb";
import DeckInfoDisplay from "./DeckInfoDisplay"
import CardList from "./CardList";

function Deck() {
    const params = useParams()
    const deckId = params.deckId
    const [deck, setDeck] = useState(null)   
    

    useEffect(() => {
        async function loadDeck() {
            try {
                const APIresponse = await readDeck(deckId)
                setDeck(APIresponse)
            } catch (error) {
                // handle any API errors here
                console.log(error)
            }
        }
        loadDeck()
    }, [deckId])

    if (deck === null) {
        return <p>Loading...</p>
    } else {
        return (
            <>
            <Breadcrumb deckName={deck.name} deckId={deckId}/>
            <DeckInfoDisplay deck={deck} deckId={deckId}/> 
            <CardList cards={deck.cards}/>                 
            </>
        )
    }
}

export default Deck