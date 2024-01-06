const knex = require("../db/connection")

function list(deck_id) {
    return knex("cards")
        .select("*")
        .where({ deck_id: deck_id})
}


module.exports = {
    list,
}