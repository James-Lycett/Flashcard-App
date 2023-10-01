import React from "react";
import DeckPageCardView from "./DeckPageCardView";

function CardList( { cards } ) {
    return (
        <>
        <ul style={{listStyleType: "none"}}>
            {cards.map((card) => (
                <React.Fragment key={card.id}>
                <li>                
                    <DeckPageCardView card={card}/> 
                </li>
                </React.Fragment>
            ))}
        </ul>
        </>
    )
}

export default CardList