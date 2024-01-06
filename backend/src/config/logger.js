const pinoHttp = require("pino-http")
const pino = require('pino');
const nanoid = require("nanoid")

// Read process.env logging variables before we do anything crazy
// Defaults to "you're a developer and you want info level logs"
// And you want to be able to read them (prettyPrint)
const level = process.env.LOG_LEVEL || "info"
const nodeEnv = process.env.NODE_ENV || "development"

// The nanoid package generates less basic (unique) request ids
const logger = pinoHttp({
    transport: {
        target: 'pino-pretty',
    },
    genReqId: (request) => 
    request.headers["x-request-id"] || nanoid(), 
    level,
})

module.exports = logger