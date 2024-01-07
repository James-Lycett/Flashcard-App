import React from "react";
import { useState, useEffect } from "react";
import "./Home.css"
import DeckList from "./DeckList";
import { listDecks } from "../../utils/api";
import { Link } from "react-router-dom"

function Home() {
    const [decks, setDecks] = useState([])

    useEffect(() => {
        async function loadDecks() {
            const APIresponse = await listDecks()
            setDecks(APIresponse.data)
        }
        loadDecks()
    }, [])

    return (
    <>
    <div className="col-10 offset-1">
    <Link to="/decks/new"><button type="button" className="btn btn-secondary offset-1 mb-3">+ Create Deck</button></Link>    
    {decks.length > 0 ? <DeckList decks={decks}/> : <h4>Loading decks...</h4>}
    </div>
    </>
    )
}

export default Home