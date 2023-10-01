import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { readDeck, readCard } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";
import EditCardForm from "./EditCardForm";

function EditCard() {
    const params = useParams()
    const deckId = params.deckId
    const cardId = params.cardId
    const [deck, setDeck] = useState(null) 
    const [card, setCard] = useState(null)  
    

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

        async function loadCard() {
            try {
                const APIresponse = await readCard(cardId)
                setCard(APIresponse)
            } catch (error) {
                console.log(error)
            }
        }
        loadDeck()
        loadCard()                
    }, [deckId])

    if (deck === null || card === null || deck.cards.length === 0) {
        return <p>Loading...</p>
    } else {
        return (
            <>
            <Breadcrumb deckName={deck.name} deckId={deckId} pageId={"Edit Card"} />
            <h2>Edit Card</h2>
            <EditCardForm deckId={deckId} deck={deck} card={card} cardId={cardId}/>
            </>
        )
    }
}

export default EditCard