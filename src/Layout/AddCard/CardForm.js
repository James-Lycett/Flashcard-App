import React, { useState } from "react";
import { Link } from "react-router-dom"
import { createCard } from "../../utils/api";

function CardForm( { deckId } ) {
    const [front, setFront] = useState()
    const [back, setBack] = useState()

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
        window.location.reload(false)
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
                    onChange={handleFrontChange}
                    required={true}
                    placeholder="Front side of card"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Back</label>
                <textarea 
                    className="form-control" 
                    id="back" 
                    name="back"
                    onChange={handleBackChange}
                    required={true}
                    placeholder="Back side of card"
                />
            </div>
            <Link to={`/decks/${deckId}`}><button>Done</button></Link>
            <button type="submit">Save</button>
        </form>
        </>
    )
}

export default CardForm