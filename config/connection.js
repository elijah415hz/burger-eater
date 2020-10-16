// Set up MySQL connection.
var mysql = require("mysql");
// Instantiate connection variable to be defined later
let connection;
if (process.env.JAWSDB_URL) {
  // If deployed on Heroku...
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  // If running locally...
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for the ORM to use
module.exports = connection;
