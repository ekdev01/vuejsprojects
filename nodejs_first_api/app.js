require('babel-register')
const {success, error}  = require('functions')
const bodyParser        = require('body-parser')

const express           = require('express')
const app               = express()
const morgan            = require('morgan')

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

// les middleware ici

// middleware morgan pour le debuggage
app.use(morgan('dev'))

// middleware body-parser pour le parsing des reponses json 
app.use(bodyParser.json());                         // pour le parsing des reponse en application/json
app.use(bodyParser.urlencoded({ extended: true })); // pour le parsing des donnes formulaire en application/x-www-form-urlencoded

// Pour la lecture d'un membre a partir de son id 
app.get('/api/v1/members/:id', (req, res) => {

    let index = getIndex(req.params.id)

    if(typeof(index) == 'string') {
        res.json(error(index))
    } else {
        res.json(success(members[index]))
    }
})

// Pour la lecture de tous les membres
app.get('/api/v1/members', (req, res) => {

    if(req.query.max != undefined && req.query.max > 0) {
        res.json(success(members.slice(0, req.query.max)))
    } 
    else if(req.query.max != undefined) {  // Cas d'erreur
        res.json(error('Wrong max value'))
    } 
    else {
        res.json(success(members))
    }
})

// Pour la mise a jour d'un membre a partir de son id
app.put('/api/v1/members/:id', (req, res) => {

    let index = getIndex(req.params.id)

    if(typeof(index) == 'string') {
        res.json(error(index))
    } 
    else {
        let same = false

        // on verifie si nom deja pris
        for(let i=0; i<members.length; i++) {
            if(req.body.name == members[i].name && req.params.id != members[i].id) {
                same = true
                break
            }
        }

        if(same) {
            res.json(error('same name'))
        } else {
            members[index].name = req.params.name
            res.json(success(true))
        }
    }

})

// Pour la creation d'un membre 
app.post('/api/v1/members', (req, res) => {

    if(req.body.name) {

        let sameName = false

        // on verifie si nom deja pris
        for(let i=0; i<members.length; i++) {
            if (members[i].name == req.body.name) {
                sameName = true
                break
            }
        }

        if(sameName) {
            res.json(error('name already taken'))
        } else {
            let member = {
                id: members.length + 1,
                name: req.body.name
            }
            // ajout nouveau membre 
            members.push(member)
            res.json(success(member))
        }
    } else {
        res.json(error('no name value'))
    }
})

app.listen(8080, () => { console.log('Started on port 8080') })

function getIndex(id) {
    for(let i=0; i<members.length; i++) {
        if(members[i].id == id)
            return i
    }
    return 'wrong id'
}