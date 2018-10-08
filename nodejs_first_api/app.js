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

// les routers ici 
let MembersRouter = express.Router() // pour gerer la branche /members 

// les middleware ici

// middleware morgan pour le debuggage
app.use(morgan('dev'))

// middleware body-parser pour le parsing des reponses json 
app.use(bodyParser.json());                         // pour le parsing des reponse en application/json
app.use(bodyParser.urlencoded({ extended: true })); // pour le parsing des donnes formulaire en application/x-www-form-urlencoded

// Appel au router MembersRouter
MembersRouter.route('/:id')

    // pour la lecture d'un membre a partir de son id 
    .get((req, res) => {

        let index = getIndex(req.params.id)

        if(typeof(index) == 'string') {
            res.json(error(index))
        } else {
            res.json(success(members[index]))
        }
    })
    // pour la mise a jour d'un membre a partir de son id
    .put((req, res) => {

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
                members[index].name = req.body.name
                res.json(success(true))
            }
        }

    })
    // pour la suppression d'un membre a partir de son id
    .delete((req, res) => {
        let index = getIndex(req.params.id)

        if(typeof(index) == 'string') {
            res.json(error(index))
        } 
        else {
            members.splice(index, 1)
            res.json(success(members))
            //res.json(success(true))
        }
    })

MembersRouter.route('/')
    // pour la lecture de tous les membres
    .get((req, res) => {

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
    // pour la creation d'un membre 
    .post((req, res) => {

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
                    id: createID(),
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

// on definit un middleware pour lier l'url /api/v1/members et le router MembersRouter
app.use('/api/v1/members', MembersRouter)

app.listen(8080, () => { console.log('Started on port 8080') })

function getIndex(id) {
    for(let i=0; i<members.length; i++) {
        if(members[i].id == id)
            return i
    }
    return 'wrong id'
}

function createID() {
    return members[members.length-1].id + 1
}