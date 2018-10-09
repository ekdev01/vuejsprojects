require('babel-register')

console.log('Debut')

/*getMember()
    .then(member => getArticles(member))
    .then(articles => console.log(articles))
    .catch(err => console.log(err.message))*/
(async () => {
    let member = await getMember() // attend le retour de la promesse (le resultat)
    let articles = await getArticles(member) // attend le retour de la promesse (le resultat)
    console.log(articles) // devrait afficher le tableau [1, 2, 3]
})()

function getMember() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Member 1')
        }, 1500)
    })
}

function getArticles(member) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3])
        }, 1500)
    })
}

console.log('Fin')