const knex = require("../db/connection")

// Knex queries to 'flashcards' database 'decks' table

function list() {
    return knex("decks")
        .select("*");
}

function create(newDeck) {
    return knex("decks")
        .insert(newDeck)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
}

function read(deckId) {
    return knex("decks")
        .select("*")
        .where({ deck_id: deckId })
        .first();
}

function update(updatedDeck, deck_id) {
    return knex("decks")
        .where({ deck_id: deck_id })
        .update({ ...updatedDeck }, "*")
        .then((createdRecords) => createdRecords[0]);
}

function destroy(deck_id) {
    return knex("decks")
        .where({ deck_id: deck_id })
        .del()
}


module.exports = {
    list,
    create,
    read,
    update,
    destroy
}