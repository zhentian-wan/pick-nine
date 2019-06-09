const {portWeb} = require('./config')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Silly Muskrat!!')
});

app.listen(portWeb, () => {
    console.log(`Running on port ${portWeb}`)
})