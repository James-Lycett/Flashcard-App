import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { updateCard } from "../../utils/api";
import CardForm from "../CardForm";

function EditCardForm( { deckId, card, cardId } ) {
    const [front, setFront] = useState(card.front)
    const [back, setBack] = useState(card.back)
    const history = useHistory()

    const handleFrontChange = (event) => {
        setFront(event.target.value)
    }

    const handleBackChange = (event) => {
        setBack(event.target.value)
    }
 
    const submitHandler = (event) => {
        event.preventDefault()
        const deckIdnumber = parseInt(deckId)
        const newCard = {
            id: cardId,
            deckId: deckIdnumber,
            front: front,
            back: back
        }
        async function cardUpdate() {
            try {
                updateCard(newCard)
            } catch (error) {
                console.log(error)
            }
        }  
        cardUpdate()
        history.go(-1)
    }


    return (
        <>
        <CardForm 
        deckId={deckId} 
        front={front} 
        back={back} 
        handleFrontChange={handleFrontChange} 
        handleBackChange={handleBackChange} 
        submitHandler={submitHandler} 
        />
        </>
    )
}

export default EditCardForm