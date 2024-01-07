/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('decks').del()
  // Seeds a couple demo decks
  await knex('decks').insert([
    {
      name: "Rendering in React",
      description: "React's component structure allows for quickly building a complex web application that relies on DOM manipulation. "
    },
    {
      name: "React Router",
      description: "React Router is a collection of navigational components that compose declaratively with your application.",
    },
    {
      name: "Express",
      description: "Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls."
    },
  ]);
};
