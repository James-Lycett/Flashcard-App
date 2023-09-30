import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb"
import { readDeck } from "../../utils/api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Study() {
    const params = useParams()
    const deckId = params.deckId
    const [deckName, setDeckName] = useState("")
    
    async function loadDeck() {
        const response = await readDeck(deckId)
        setDeckName(response.name)
    }
    loadDeck()
    return (
        <>
        <Breadcrumb deckName={deckName}/>
        </>
    )
}

export default Study