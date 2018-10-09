require('babel-register')

console.log('Debut')
let p = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('All good.')
        //reject(new Error('Error during...'))
    }, 1500)

})

p.then((message) => {
    console.log(message)
}).catch((err) => {
    console.log(err.message)
})

console.log('Fin')

/*
getMember((member) => {
    console.log(member)
    getArticles(member, (articles) => {
        console.log(articles)
    })
})

function getMember(next) {
    setTimeout(() => {
        next('Member 1') 
    }, 1500)
}

function getArticles(member, next) {
    setTimeout(() => {
        next([1, 2, 3])
    }, 1500)
}
*/