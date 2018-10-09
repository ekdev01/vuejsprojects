require('babel-register')

console.log('Debut')
getMember( (member) => {
    console.log(member)
})
console.log('Fin')

function getMember(next) {
    setTimeout(() => {
        next('Member 1') 
    }, 1500)
}