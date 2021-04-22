const { Pool, Client } = require('pg');
const client = new Client({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: '5432',
    database: 'ngrid'
});

function GetUserList() {
    client.connect();
    client.query('SELECT * FROM stat.content_info', (err, res) => {
        console.log(res);
        client.end();
    });
};

module.exports = {
    getUserList: GetUserList
}
