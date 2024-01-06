const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") })
const express = require("express");
const logger = require("./config/logger")
const cors = require("cors")
const app = express();
const decksRouter = require("./decks/decks.router")
const cardsRouter = require("./cards/cards.router")
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler")

// Logger is a pinoHttp instance for http logging
app.use(logger)

// "I hope you brought enough API for everyone"
app.use(cors())

// "You get used to it, I don't even see the code, all I see is blonde, brunette, redhead..."
app.use(express.json())

// Routes
app.use("/decks", decksRouter)
app.use("/cards", cardsRouter)

// Errors
app.use(notFound)
app.use(errorHandler)

module.exports = app;
