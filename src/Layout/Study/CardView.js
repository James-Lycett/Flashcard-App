import React, { useState, useEffect } from "react";
import { readCard } from "../../utils/api";
import { useHistory, Link } from "react-router-dom"

function CardView( { deck, deckId } ) {
    const [card, setCard] = useState(deck.cards[0])
    const [cardNumber, setCardNumber] = useState(0)
    const [front, setFront] = useState(true)
    const history = useHistory()
    const deckLengthStr = '' + deck.cards.length
    const deckLength = deck.cards.length

    useEffect(() => {
        if (cardNumber !== deckLength) {
        async function loadCard() {
            const response = await readCard(deck.cards[cardNumber].card_id)
            setCard(response.data)
        }
        loadCard()
        }
    }, [cardNumber, deck.cards, deckLength])

    const flipButtonHandler = () => {
        if (front === true) {
            setFront(false)
        } else {
            setFront(true)
        }
    }

    const nextButtonHandler = () => {
        setCardNumber(cardNumber + 1)
        setFront(true)
        if (cardNumber + 1 >= deckLength) {
            const confirm = window.confirm("Restart cards? Click 'cancel' to return to the home page.")
            if (confirm) {
                setCardNumber(0)
            } else {
                history.push("/")
            }
        }
    }

    
    if (deckLength >= 3) {
        return (
            <>
            <div className="card col-lg-10 w-100 mt-5" style={{ width: "18rem" }}>
                <div className="card-body">
                <h5 className="card-title">{`Card ${cardNumber + 1} of ${deckLengthStr}`}</h5>
                <p className="card-text">{front ? card.front : card.back}</p>
                <button type="button" className="btn btn-secondary card-link" onClick={flipButtonHandler}>Flip</button>
                {front === false ? <button type="button" className="btn btn-primary card-link" onClick={nextButtonHandler}>Next</button> : null}
                </div>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div className="card col-10 w-100" style={{ width: "18rem" }}>
                <div className="card-body">
                <h5 className="card-title">Not Enough Cards</h5>
                <p className="card-text">{`You need at least 3 cards to study. There are ${deckLengthStr} cards in this deck.`}</p>
                <Link to={`/decks/${deckId}/cards/new`}><button type="button" className="btn btn-primary">+ Add Cards</button></Link>
                </div>
            </div>
            </>
        )
    }
}

export default CardView