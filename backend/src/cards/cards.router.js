const router = require("express").Router({ mergeParams: true })
const controller = require("./cards.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

// Request route handling for /cards route
router.route("/new-card/:deckId")
    .post(controller.create)
    .all(methodNotAllowed)

router.route("/:deckId")
    .get(controller.list)
    .all(methodNotAllowed)


module.exports = router