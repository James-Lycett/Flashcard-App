const knex = require("../db/connection")

// Knex queries to 'flashcards' database 'cards' table

// Returns an array of card objects with matching deck_id
function list(deckId) {
    return knex("cards")
        .select("*")
        .where({ deck_id: deckId})
}

// Creates a new card and returns the full created object
function create(newCard) {
    return knex("cards")
        .insert(newCard)
        .returning("*")
        .then((createdRecords) => createdRecords[0])
}


module.exports = {
    list,
    create,
}