import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { readDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";
import EditDeckForm from "./EditDeckForm";

function Edit() {
    const params = useParams()
    const deckId = params.deckId
    const [deck, setDeck] = useState(null)   
    

    useEffect(() => {
        async function loadDeck() {
            try {
                const APIresponse = await readDeck(deckId)
                setDeck(APIresponse)
            } catch (error) {
                // handle any API errors here
                console.log(error)
            }
        }
        loadDeck()
    }, [deckId])


    if (deck === null) {
        return <p>Loading...</p>
    } else {
        return (
            <>
            <Breadcrumb deckId={deckId} deckName={deck.name} pageId={"Edit"}/>
            <EditDeckForm deckId={deckId} deckName={deck.name} deckDescription={deck.description}/>
            </>
        )
    }
}

export default Edit