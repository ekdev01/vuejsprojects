require('babel-register')
const mysql = require('mysql')

const db = mysql.createConnection({
  host     : 'localhost',
  database : 'nodejs',
  user     : 'root',
  password : 'afkunite08'
})

db.connect((err) => {
  if (err) 
    console.error(err.stack)
  else 
    console.log('Connected.')
})