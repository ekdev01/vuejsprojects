require('babel-register')

console.log('Debut')
let member = getMember()
console.log(member)
console.log('Fin')


function getMember() {
    setTimeout(() => {
        return 'Member 1'
    }, 1500)
}