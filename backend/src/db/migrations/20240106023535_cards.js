/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  // Creates "cards" table with "deck_id" foreign key, "front", and "back"
  return knex.schema.createTable("cards", (table) => {
    table.increments("card_id").primary();
    table
        .integer("deck_id")
        .references("deck_id")
        .inTable("decks")
        .onDelete("cascade");
    table.string("front");
    table.string("back");
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("cards")
};
