import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createCard } from "../../utils/api";
import CardForm from "../CardForm";

function AddCardForm( { deckId } ) {
    const [front, setFront] = useState()
    const [back, setBack] = useState()
    const buttonName = "Submit"
    const history = useHistory()

    const handleFrontChange = (event) => {
        setFront(event.target.value)
    }

    const handleBackChange = (event) => {
        setBack(event.target.value)
    }
 
    const submitHandler = (event) => {
        event.preventDefault()
        const newCard = {
            front: front,
            back: back
        }
        async function cardCreate() {
            try {
                await createCard(deckId, newCard)
            } catch (error) {
                console.log(error)
            }
        }
        cardCreate()
        history.push(`/decks/${deckId}`)
        window.location.reload()
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
        buttonName={buttonName}
        />
        </>
    )
}

export default AddCardForm