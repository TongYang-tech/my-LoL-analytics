const express = require('express')
const typesRouter = require('./types')
const cardsRouter = require('./cards')

const v1Router = express.Router()

v1Router.use('/v1', typesRouter)
v1Router.use('/v1', cardsRouter)

module.exports = v1Router
