require('babel-register')

console.log('Debut')

setTimeout(() => {
    console.log('In timeout')
}, 1500)

console.log('Fin')