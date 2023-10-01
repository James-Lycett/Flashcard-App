import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import { updateDeck } from "../../utils/api";

function EditForm( { deckId, deckName, deckDescription } ) {
    const [name, setName] = useState(deckName)
    const [description, setDescription] = useState(deckDescription)
    const history = useHistory()

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newDeck = {
            id: deckId,
            name: name,
            description: description
        }
        async function deckUpdate() {
            try {
                updateDeck(newDeck)
            } catch (error) {
                console.log(error)
            }
        }
        deckUpdate()
        history.push(`/decks/${deckId}`)
        window.location.reload(false)
    }

    return (
        <>
        <div>
            <h2>Edit Deck</h2>
                <form name="edit" onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleNameChange}
                            required={true}
                            value={name}
                        />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            className="form-control"                        
                            id="description" 
                            name="description"
                            onChange={handleDescriptionChange}                        
                            required={true}
                            value={description} 
                            cols={50}
                            rows={5}               
                        />
                    </div>
                    <Link to={`/decks/${deckId}`}><button>Cancel</button></Link>
                    <button type="submit">Submit</button>
                </form>
        </div>
        </>
    )
}

export default EditForm