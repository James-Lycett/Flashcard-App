/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cards').del()
  // Seeds two or three cards for each demo deck
  await knex('cards').insert([
    {
      front: "Differentiate between Real DOM and Virtual DOM.",
      back: "Virtual DOM updates are faster but do not directly update the HTML",
      deck_id: 1
    },
    {
      front: "How do you modify the state of a different React component?",
      back: "Not at all! State is visible to the component only.",
      deck_id: 1,
    },
    {
      front: "How do you pass data 'down' to a React child component?",
      back: "As properties or props",
      deck_id: 1,
    },
    {
      front: "What path will match the following Route?\n<Route>\n  <NotFound />\n</Route>",
      back: "All paths. A route with no path matches all URL's",
      deck_id: 2,
    },
    {
      front: "What does <Switch> do?",
      back: "Renders the first matching child <Route> ",
      deck_id: 2,
    },
    {
      front: "What does the useHistory hook do?",
      back: "The useHistory hook gives you access to the history instance that may be used to navigate",
      deck_id: 2,
    },
    {
      front: "What are middleware functions?",
      back: "Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle.",
      deck_id: 3,
    },
    {
      front: "What is the next function?",
      back: "The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.",
      deck_id: 3,
    },
    {
      front: "What tasks are middleware functions capable of?",
      back: "Middleware functions can execute any code, make changes to the req and res objects, end the req-res cycle, and/or call the next middleware in the stack.",
      deck_id: 3
    },
  ]);
};
