import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { readDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";
import CardForm from "./CardForm";

function AddCard() {
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
            <Breadcrumb deckName={deck.name} deckId={deckId} pageId={"AddCard"} />
            <h2>{`${deck.name}: Add Card`}</h2>
            <CardForm deckId={deckId} />
            </>
        )
    }
}

export default AddCard