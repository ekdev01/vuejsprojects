require('babel-register')
const mysql = require('mysql')

const db = mysql.createConnection({
  host     : 'localhost',
  database : 'nodejss',
  user     : 'root',
  password : 'afkunite08'
})

db.connect((err) => {
  if (err) 
    console.error(err.stack)
  else 
    console.log('Connected as id ' + db.threadId)
})