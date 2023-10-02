import React from "react";
import { Link } from "react-router-dom"

function CardForm( { deckId, front, back, handleFrontChange, handleBackChange, submitHandler } ) {

    return (
        <>
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Front</label>
                <textarea 
                    className="form-control"                 
                    id="front" 
                    name="front"
                    value={front}
                    onChange={handleFrontChange}
                    required={true}                    
                />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Back</label>
                <textarea 
                    className="form-control" 
                    id="back" 
                    name="back"
                    value={back}
                    onChange={handleBackChange}
                    required={true}                    
                />
            </div>
            <div className="row">
            <Link to={`/decks/${deckId}`}><button className="btn btn-secondary ml-3">Done</button></Link>
            <button type="submit" className="btn btn-primary ml-2">Submit</button>
            </div>
        </form>
        </>
    )
}

export default CardForm