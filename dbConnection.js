const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'bxjnuhzrdkqaizgd7rfb-mysql.services.clever-cloud.com',
        user: 'ucldng7qoxz7rsca',
        password: 'ucldng7qoxz7rsca',
        database: 'bxjnuhzrdkqaizgd7rfb',
        port: '3306'
    })
}