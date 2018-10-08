// -------------------------------------------------------------
// Module OS
// module pour avoir les infos sur notre ordinateur
/*const os = require('os')

// Module OS
// Le module os fournit un certain nombre de méthodes utilitaires
// liées au système d'exploitation. On peut y accéder en utilisant:
console.log(os.hostname())
console.log(os.arch())
console.log(os.homedir())
console.log(os.cpus())
*/

// -------------------------------------------------------------
// Module FS
/*const fs = require('fs')       // module pour file system

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)

        fs.writeFile('test.txt', 'Hello world!', 'utf-8', (err) => {
            fs.readFile('test.txt', 'utf-8', (err, data) => {
                console.log(data)
            })
        })
    }
})
*/

// -------------------------------------------------------------
// Module HTTP
/*const http = require('http') 

// Avec ce module on va commencer a faire un site.

http.createServer((req, res) => {
    // C'est ici que seront traitees toutes les requetes http
    if(req.url == '/') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write("<h1>Accueil</h1>\n")
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' })
        res.write("<span style='color: red'>Erreur 404</span>")
    }
    res.end()

}).listen(8080)*/

// -------------------------------------------------------------
// Combinaison des modules http et os
const http = require('http') 
const fs = require('fs') 

// Avec ce module on va commencer a faire un site.

http.createServer((req, res) => {
    // C'est ici que seront traitees toutes les requetes http
    if(req.url == '/') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write("<h1>Accueil</h1>\n")
        res.end()
    } else if(req.url == '/test') {
        fs.readFile('test.txt', 'utf-8', (err, data) => {
            if (err) {
                send404(res)
            } else {
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.write(data)
                res.end()
            }
        })
    } else {
        send404(res)
    }

}).listen(8080)

function send404(res) {
    res.writeHead(404, { 'Content-type': 'text/html' })
    res.write("<span style='color: red'>Erreur 404</span>")
    res.end()
}
