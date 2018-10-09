require('babel-register')

console.log('Debut')
getMember()
console.log('Fin')


function getMember() {
    setTimeout(() => {
        console.log('Member 1')
    }, 1500)
}