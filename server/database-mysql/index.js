const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'f@res1999',
  database : 'mvp2'
});

module.exports = connection;