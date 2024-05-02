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
            try {
                const APIresponse = await listDecks()
                setDecks(APIresponse.data)
            }
            catch (error) {
                console.error(error)
            }
        }
        loadDecks()
    }, [])

    const loadingMessage = (
        <>
        <h4>Loading decks...</h4>
        <p>The server spins down after a period of inactivity in order to save me money. If you don't see anything here give it a minute and reload the page. It's also possible that somebody deleted all my demo decks idk.</p>
        </>
    )

    return (
    <>
    <div className="col flex-column d-flex justify-content-center">
        <div>
            <Link to="/decks/new"><button type="button" className="btn btn-secondary offset-lg-1 mb-5">+ Create Deck</button></Link>
        </div>
        <div>
            {decks.length > 0 ? <DeckList decks={decks}/> : loadingMessage}
        </div>
    </div>
    </>
    )
}

export default Home