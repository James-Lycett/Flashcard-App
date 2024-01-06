const router = require("express").Router()
const controller = require("./decks.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

// Request route handling for /movies route
router.route("/")
    .get(controller.list)
    .all(methodNotAllowed)


module.exports = router