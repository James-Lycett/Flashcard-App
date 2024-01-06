const service = require("./decks.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

// CRUDL request functions for /decks route

// Lists all decks
async function list(req, res, next) {
    const data = await service.list()

    res.json({ data })
}

// Validates request body has data
function bodyHasData(req, res, next) {
    const data = req.body.data
  
    if (!data) {
      return next({
        status: 400,
        message: `Request body must have data property.`
      })
    } else {
      next()
    }
}

// Validates request body has all required properties
function bodyHasRequiredProperties(req, res, next) {
    const data = req.body.data
    const bodyProperties = Object.keys(data)
    let validBodyProperties = [
      "name",
      "description",
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
    const { name, description } = req.body.data
    const properties = {
      name: name,
      description: description,
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

// Validates request body properties are strings
function validateStringProperties(req, res, next) {
    const bodyData = req.body.data

    for (let property in bodyData) {
        if (typeof bodyData[property] !== "string") {
            return next({
                status: 400,
                message: `${property} must be a string. Received ${bodyData[property]}`
            })
        }
    }

    return next()
}

// Creates a new deck
async function create(req, res, next) {
    const newDeck = req.body.data
    const data = await service.create(newDeck)

    res.status(201).json({ data })
}


module.exports = {
    list: [asyncErrorBoundary(list)],
    create: [
        bodyHasData,
        bodyHasRequiredProperties,
        validatePropertiesAreNotEmpty,
        validateStringProperties,
        asyncErrorBoundary(create)
    ],
}