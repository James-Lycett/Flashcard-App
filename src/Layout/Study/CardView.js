import React, { useState, useEffect } from "react";
import { readCard } from "../../utils/api";
import { useHistory } from "react-router-dom"

function CardView( { deck } ) {
    const [card, setCard] = useState(deck.cards[0])
    const [cardNumber, setCardNumber] = useState(0)
    const [front, setFront] = useState(true)
    const history = useHistory()

    useEffect(() => {
        if (cardNumber !== deck.cards.length) {
        async function loadCard() {
            const response = await readCard(deck.cards[cardNumber].id)
            setCard(response)
        }
        loadCard()
        }
    }, [cardNumber])

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
        if (cardNumber + 1 >= deck.cards.length) {
            const confirm = window.confirm("Restart cards? Click 'cancel' to return to the home page.")
            if (confirm) {
                setCardNumber(0)
            } else {
                history.push("/")
            }
        }
    }

    

    return (
        <>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">{`Card ${cardNumber + 1} of ${deck.cards.length}`}</h5>
            <p className="card-text">{front ? card.front : card.back}</p>
            <a className="card-link"><button onClick={flipButtonHandler}>Flip</button></a>
            {front === false ? <a className="card-link"><button onClick={nextButtonHandler}>Next</button></a> : null}
            </div>
        </div>
        </>
    )
}

export default CardView