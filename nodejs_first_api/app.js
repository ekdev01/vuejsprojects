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

app.get('/api/v1/members/:id', (req, res) => {
    // Renvoie le membre correspondant a id.
    res.send(members[(req.params.id) - 1])
})

app.listen(8080, () => { console.log('Started on port 8080') })