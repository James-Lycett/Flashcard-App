import React, { useState } from "react";
import { useHistory } from "react-router-dom"

function CreateDeck() {
    const history = useHistory()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const handleNameChange = (event) => setName(event.target.value)

    const handleDescriptionChange = (event) => setDescription(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        const newDeck = {
            name: {name},
            description: {description}
        }
        async function postDeck() {
            const response = await fetch(
                "http://localhost:8080/decks",
                {
                    method: "POST",
                    body: {newDeck}
                }               
                )
        }
        history.push("/decks/:deckId/study")
        setName("")
        setDescription("")
        console.log("handleSubmit function needs proper path")
    }
    function handleCancel(event) {
        event.preventDefault()
        history.push("/")
        console.log("handleCancel function needs built")
    }
    return (
        <>
        <form name="create" onSubmit={handleSubmit}>
                <legend>Create Deck</legend>
                <div>
                    <label htmlFor="name" >Name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleNameChange}
                        placeholder="Deck Name"
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                        <textarea
                        id="description" 
                        name="description"
                        onChange={handleDescriptionChange}
                        placeholder="Brief description of the deck"
                        required={true}
                        >
                        </textarea>
                </div>
                <div>
                    <button onClick={handleCancel}>Cancel</button>
                    <button type="submit">Submit</button>                    
                </div>
        </form>
        </>
    )
}

export default CreateDeck