require('babel-register')

console.log('Debut')

// promise one
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1')
    }, 1500)
})

// promise two
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2')
    })
}, 3000)

// mise en paralelle
Promise.race([p1, p2])
    .then(result => console.log(result))

console.log('Fin')