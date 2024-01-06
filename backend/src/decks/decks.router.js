const router = require("express").Router({ mergeParams: true })
const controller = require("./decks.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

// Request route handling for /movies route
router.route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

router.route("/:deckId")
    .get(controller.read)
    .put(controller.update)
    .all(methodNotAllowed)


module.exports = router