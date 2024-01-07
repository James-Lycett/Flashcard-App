import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { readDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";
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
                setDeck(APIresponse.data)
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
            <div className="col-10 offset-1">
            <Breadcrumb deckName={deck.name} deckId={deckId} pageId={"Deck"}/>
            <DeckInfoDisplay deck={deck} deckId={deckId}/> 
            <CardList cards={deck.cards}/>                 
            </div>
            </>
        )
    }
}

export default Deck