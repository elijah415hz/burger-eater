// Import MySQL connection
const connection = require("../config/connection")

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// custom orm with basic CRUD functions
const orm = {
  // Return all rows and columns from a table
  all: function (table, cb) {
    let queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, function (err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  // Insert supplied values into a supplied table
  create: function (table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`

    console.log(queryString);
    connection.query(queryString, vals, function (err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  // Change supplied values in supplied at supplied rows
  update: function (table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result)
    });
  },
  // Remove row from supplied table at supplied condition
  delete: function (table, condition, cb) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    })
  }
};

// Export the orm
module.exports = orm;