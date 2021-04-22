const vals = require('./const.js');
const { Pool, Client } = require('pg');
const client = new Client({
    user: vals.user,
    password: vals.pass,
    host: vals.host,
    port: vals.port,
    database: vals.db
});

function GetUserList() {
    client.connect();
    client.query('SELECT * FROM users', (err, res) => {
        console.log(res);
        client.end();
    });
};

module.exports = {
    getUserList: GetUserList
}
