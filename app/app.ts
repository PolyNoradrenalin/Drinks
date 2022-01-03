const { Sequelize } = require('sequelize');

const mysql = require('mysql2');

const db = mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "root",
    database: "drinks"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})