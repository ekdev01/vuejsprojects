require('babel-register')
const express = require('express')
const app = express()
const morgan = require('morgan')


// Mise en place middleware morgan pour le debuggage
app.use(morgan('dev'))

// Creation requete GET /api
app.get('/api', (req, res) => {
    res.send('Root API')
})

app.get('/api/v1', (req, res) => {
    res.send('API Version 1')
})

app.get('/api/v1/books/:id', (req, res) => {
    res.send(req.params)
})

app.get('/api/v1/books/:id/:name', (req, res) => {
    res.send(req.params)
})


// Execution de l'application sur le port 8080 avec 
// en callback un message dans la console
app.listen(8080, () => { console.log('Started on port 8080') })