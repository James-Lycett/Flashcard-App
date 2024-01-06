const service = require("./decks.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

// CRUDL request functions for /decks route

async function list(req, res, next) {
    const data = await service.list()

    res.json({ data })
}


module.exports = {
    list: [asyncErrorBoundary(list)]
}