const { bundleSrc, portWeb } = require('./config')
const express = require('express')
const app = express()

const knex = require('./db/knex')

app.set('view engine', 'pug')
app.set('views', './server/views')

app.get('/', (req, res) => {
  const env = {
    message: 'Muskrat Party'
  }
  res.render('app', { bundleSrc, env })
})

app.listen(portWeb, () => {
  console.log(`Running on port ${portWeb}`)
})
