import React, { useState, useEffect } from "react";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "react-router-dom"
import { readDeck } from "../../utils/api";

function Deck() {
    const params = useParams()
    const deckId = params.deckId
    const [deck, setDeck] = useState(null)

    useEffect(() => {
        async function loadDeck() {
            try {
                const APIresponse = await readDeck(deckId)
                setDeck(APIresponse)
                console.log(deck)
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
            </>
        )
    }
}

export default Deck