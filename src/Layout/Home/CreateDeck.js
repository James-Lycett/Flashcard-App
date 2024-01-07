import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom"
import { createDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";

function CreateDeck() {
    const history = useHistory()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newDeck = {
            name: name,
            description: description
        }
        async function postDeck() {
            const postedDeck = await createDeck(newDeck)
            const deckID = postedDeck.data.deck_id
            return () => {
            setName("")
            setDescription("")
            history.push(`/decks/${deckID}`)
            }
        }
        postDeck()
        history.go(-1)
    }
    
    return (
        <>
        <Breadcrumb pageId="Create Deck" />
        <form name="create" onSubmit={handleSubmit} className="mb-3">
                <legend>Create Deck</legend>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        onChange={handleNameChange}
                        placeholder="Deck Name"
                        required={true}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                        <textarea
                        id="description" 
                        name="description"
                        className="form-control"
                        onChange={handleDescriptionChange}
                        placeholder="Brief description of the deck"
                        required={true}
                        />
                </div>
                <div className="row">
                    <Link to="/"><button type="button" className="btn btn-secondary ml-3">Cancel</button></Link>
                    <button type="submit" className="btn btn-primary ml-2">Submit</button>                    
                </div>
        </form>
        </>
    )
}

export default CreateDeck