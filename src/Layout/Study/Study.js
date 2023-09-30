import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Breadcrumb from "./Breadcrumb"
import CardView from "./CardView";

function Study() {
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
            <Breadcrumb deckName={deck.name}/>
            <h2>{`Study: ${deck.name}`}</h2>
            <CardView deck={deck}/>
            </>
        )
    }
}

export default Study