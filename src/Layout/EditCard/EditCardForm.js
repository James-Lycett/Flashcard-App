import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import { updateCard } from "../../utils/api";

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
        history.push(`/decks/${deckId}`)
    }


    return (
        <>
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Front</label>
                <textarea 
                    className="form-control"                 
                    id="front" 
                    name="front"
                    value={front}
                    onChange={handleFrontChange}
                    required={true}                    
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Back</label>
                <textarea 
                    className="form-control" 
                    id="back" 
                    name="back"
                    value={back}
                    onChange={handleBackChange}
                    required={true}                    
                />
            </div>
            <Link to={`/decks/${deckId}`}><button>Done</button></Link>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default EditCardForm