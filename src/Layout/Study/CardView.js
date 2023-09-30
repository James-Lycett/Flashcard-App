import React, { useState, useEffect } from "react";
import { readCard } from "../../utils/api";

function CardView( { deck } ) {
    const [card, setCard] = useState(deck.cards[0])
    const [cardNumber, setCardNumber] = useState(0)
    const [front, setFront] = useState(true)
    console.log(deck)

    useEffect(() => {
        async function loadCard() {
            const response = await readCard(deck.cards[cardNumber].id)
            setCard(response)
        }
        loadCard()
    }, [])

    const cardTextHandler = () =>  {
        if (front === true) {
            return card.front
        } else {
            return card.back
        }
    }

    const flipButtonHandler = () => {
        if (front === true) {
            setFront(false)
        } else {
            setFront(true)
        }
    }
    
    return (
        <>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">{`Card ${cardNumber + 1} of ${deck.cards.length}`}</h5>
            <p className="card-text">{cardTextHandler}</p>
            <a className="card-link"><button onClick={flipButtonHandler}>Flip</button></a>
            </div>
        </div>
        </>
    )
}

export default CardView