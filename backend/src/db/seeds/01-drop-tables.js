/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Kinda weird and risky raw SQL that seemed necessary to be able to run seeds repeatedly for deployment purposes
    // Drops foreign key constraint
    await knex.raw('ALTER TABLE cards DROP CONSTRAINT cards_deck_id_foreign');
  
    // Truncates tables
    await knex.raw('TRUNCATE TABLE decks, cards RESTART IDENTITY');
  
    // Recreates foreign key constraint
    await knex.raw('ALTER TABLE cards ADD CONSTRAINT cards_deck_id_foreign FOREIGN KEY (deck_id) REFERENCES decks(deck_id) ON UPDATE CASCADE ON DELETE CASCADE');
};
