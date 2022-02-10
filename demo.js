var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Qwerty123!",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers WHERE name LIKE 'V%' ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});