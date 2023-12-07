const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'hotel',
    password: 'root',
});

module.exports = pool;