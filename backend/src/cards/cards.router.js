const router = require("express").Router({ mergeParams: true })
const controller = require("./cards.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

// Request route handling for /cards route

router.route("/deck/:deckId")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

router.route("/:cardId")
    .get(controller.read)
    .put(controller.update)
    .all(methodNotAllowed)

module.exports = router