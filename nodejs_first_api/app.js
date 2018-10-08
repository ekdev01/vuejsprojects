require('babel-register')
const express = require('express')
const app = express()
const morgan = require('morgan')

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
    res.json(success(members[(req.params.id) - 1]))
})

// Renvoie tous les membres
app.get('/api/v1/members', (req, res) => {

    if(req.query.max != undefined && req.query.max > 0) {
        res.json(success(members.slice(0, req.query.max)))
    } else {
        res.json(success(members))
    }
})
app.listen(8080, () => { console.log('Started on port 8080') })

// renvoie le statut success et le resultat
function success(result) {
    return {
        status: 'success',
        result: result
    }
}

// renvoie le statut error et le message d'erreur
function error(message) {
    return {
        status: 'error',
        message: message
    }
}