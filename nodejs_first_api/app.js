require('babel-register')
const express   = require('express')
const app       = express()
const morgan    = require('morgan')
const func      = require('functions')

// constante members qui contiendra tous les membres
const members = [
    {
        id: 1,
        name: 'Jhon'
    },
    {
        id: 2,
        name: 'Julie'
    },
    {
        id: 3,
        name: 'Jack'
    }
]

app.use(morgan('dev'))

// Retourne un membre a partir de l'id
app.get('/api/v1/members/:id', (req, res) => {
    // Renvoie le membre correspondant a id.
    res.json(func.success(members[(req.params.id) - 1]))
})

// Renvoie tous les membres
app.get('/api/v1/members', (req, res) => {

    if(req.query.max != undefined && req.query.max > 0) {
        res.json(func.success(members.slice(0, req.query.max)))
    } 
    else if(req.query.max != undefined) {  // Cas d'erreur
        res.json(func.error('Wrong max value'))
    } 
    else {
        res.json(func.success(members))
    }
})
app.listen(8080, () => { console.log('Started on port 8080') })