require('babel-register')
const express = require('express')
const app = express()

// Creation requete GET /api
app.get('/api' . (res, req) => {
    res.send('Root API')
})

// Execution de l'application sur le port 8080 avec 
// en callback un message dans la console
app.listen(8080, () => { console.log('Started on port 8080') })

