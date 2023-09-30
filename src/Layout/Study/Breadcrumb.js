import React from "react";

function Breadcrumb({ deckName }) {
    return (
        <>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">{deckName}</a></li>
                <li class="breadcrumb-item active" aria-current="page">Study</li>
            </ol>
        </nav>
        </>
    )
}

export default Breadcrumb