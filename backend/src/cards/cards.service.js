const knex = require("../db/connection")

// Knex queries to 'flashcards' database 'cards' table

// Returns an array of card objects with matching deck_id
function list(deckId) {
    return knex("cards")
        .select("*")
        .where({ deck_id: deckId});
}

// Creates a new card and returns the created database row
function create(newCard) {
    return knex("cards")
        .insert(newCard)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
}

// Returns the first card with matching card_id
function read(cardId) {
    return knex("cards")
        .select("*")
        .where({ card_id: cardId })
        .first();
}

// Updates the card with cardId and returns the updated database row
function update(updatedCard, card_id) {
    return knex("cards")
        .where({ card_id: card_id })
        .update({ ...updatedCard }, "*")
        .then((createdRecords) => createdRecords[0])
}

// Deletes the card with cardId
function destroy(card_id) {
    return knex("cards")
        .where({ card_id: card_id })
        .del()
}


module.exports = {
    list,
    create,
    read,
    update,
    destroy
}