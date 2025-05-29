const axios = require('axios')
const express = require('express')

const cardsRouter = express.Router()

cardsRouter.get('/cards', async (req, res) => {
  const types = await axios.request({
    url: 'https://api.pokemontcg.io/v2/cards',
    method: 'GET',
    headers: {
      apikey: process.env.POKEMON_TCG_API_KEY
    },
    params: {
      page: 1,
      pageSize: 5
    }
  })
  const data = types.data.data
  res.status(200).json(data)
})

module.exports = cardsRouter