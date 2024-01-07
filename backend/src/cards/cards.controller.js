const service = require("./cards.service")
const decksController = require("../decks/decks.controller")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

// CRUDL request functions for /cards route

// Returns an array of all the cards for a single deck
async function list(req, res, next) {
    const data = await service.list()

    res.json({ data })
}

// Validates request body has all required properties
function bodyHasRequiredProperties(req, res, next) {
    const data = req.body.data
    const bodyProperties = Object.keys(data)
    let validBodyProperties = [
      "front",
      "back",
    ]
  
    if (!validBodyProperties.every((key) => bodyProperties.includes(key)) || bodyProperties.some((key) => !validBodyProperties.includes(key))) {
      return next({
        status: 400,
        message: `Request body has invalid properties or is missing required properties. Valid properties are ${validBodyProperties.join(", ")}`
      })
    } else {
      next()
    }
}

// Validates POST request body properties are not empty
function validatePropertiesAreNotEmpty(req, res, next) {
    const { front, back } = req.body.data
    const properties = {
      front: front,
      back: back,
    }
  
    for (let property in properties) {
      if (!properties[property]) {
        return next({
          status: 400,
          message: `${property} property of request body data must have a value. Received '${property}: ${properties[property]}'`
        })
      }
    }
  
    return next()
}

// Creates a new card in the deck designated by req url param /:deckId
async function create(req, res, next) {
    const { deckId } = req.params
    let newCard = req.body.data
    newCard = {
        ...newCard,
        deck_id: deckId
    }

    const data = await service.create(newCard, deckId)

    res.json({ data })
}

// Validates that a card with the given cardId exists
async function cardExists(req, res, next) {
    const { cardId } = req.params
    const data = await service.read(cardId)
  
    if (!data) {
      return next({
        status: 404,
        message: `Card with card_id "${cardId}" does not exist`
      })
    } else {
      res.locals.card = data
      next()
    }
}

// Returns the card with the matching cardId
function read(req, res, next) {
    const data = res.locals.card
  
    res.json({ data })
}

// Updates an existing card
async function update(req, res, next) {
    const { card_id } = res.locals.card
    const updatedCard = req.body.data

    const data = await service.update(updatedCard, card_id)

    res.json({ data })
}

// Deletes an existing card
async function destroy(req, res, next) {
    const { card_id } = res.locals.card

    await service.destroy(card_id)

    res.sendStatus(204)
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    create: [
        decksController.deckExists,
        decksController.bodyHasData,
        bodyHasRequiredProperties,
        validatePropertiesAreNotEmpty,
        decksController.validateStringProperties,
        asyncErrorBoundary(create)
    ],
    read: [
        asyncErrorBoundary(cardExists),
        read
    ],
    update: [
        asyncErrorBoundary(cardExists),
        decksController.bodyHasData,
        bodyHasRequiredProperties,
        validatePropertiesAreNotEmpty,
        decksController.validateStringProperties,
        asyncErrorBoundary(update)
    ],
    delete: [
        asyncErrorBoundary(cardExists),
        asyncErrorBoundary(destroy)
    ]
}