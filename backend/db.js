const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  database: "tasks",
  port: 3306,
  user: "root",
  password: "Oliveiraleo12.",
  socketPath: "/var/run/mysqld/mysqld.sock",
});

module.exports = db;
