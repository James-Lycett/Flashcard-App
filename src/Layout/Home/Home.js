import React from "react";
import { useState, useEffect } from "react";
import "./Home.css"
import DeckList from "./DeckList";
import { listDecks } from "../../utils/api";

function Home() {
    const [decks, setDecks] = useState([])

    useEffect(() => {
        async function loadDecks() {
            const APIresponse = await listDecks()
            setDecks(APIresponse)
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