import React from "react";
import DeckPageCardView from "./DeckPageCardView";

function CardList( { cards } ) {
    return (
        <>
        <ul style={{listStyleType: "none"}}>
            {cards.map((card, index) => (
                <DeckPageCardView card={card} key={index}/> 
            ))}
        </ul>
        </>
    )
}

export default CardList