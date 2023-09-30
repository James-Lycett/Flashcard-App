import React, { useState, useEffect } from "react";
import { readCard } from "../../utils/api";

function CardView( { deck }) {
    const [card, setCard] = useState({})
    const [side, setSide] = useState("")
    
    
    useEffect(() => {
        async function loadCard() {
            const response = await readCard(1)
        }
        loadCard()
    }, [])
    
    return (
        <>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{`Card ${card.id} of ${deck.cards.length}`}</h5>
                <p className="card-text"></p>
                <a href="#" className="card-link"><button>Flip</button></a>
            </div>
        </div>
        </>
    )
   return <p>card</p>
}

export default CardView