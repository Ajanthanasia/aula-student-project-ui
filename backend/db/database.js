const mysql = require('mysql2');
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const host = process.env.DB_HOST;
const connection = process.env.DB_CONNECTION;

const db = mysql.createConnection({
    host: host,
    user: username,
    password: password,
    database: database,
});

db.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    console.log("connected as id " + db.threadId);
});

module.exports = db;