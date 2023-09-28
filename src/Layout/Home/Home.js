import React from "react";
import { useState, useEffect } from "react";
import "./Home.css"
import DeckList from "./DeckList";

function Home() {
    const [decks, setDecks] = useState([])

    useEffect(() => {
        async function loadDecks() {
            const response = await fetch(
                "http://localhost:8080/decks"
            )
            const decksFromAPI = await response.json()
            console.log(decksFromAPI)
            setDecks(decksFromAPI)
        }
        loadDecks()
    }, [])
    return (
    <>
    <a href="/decks/new"><button>+ Create Deck</button></a>
    <DeckList decks={decks}/>
    </>
    )
}

export default Home