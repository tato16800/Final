const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'brk12pv26q86rfdeiifn-mysql.services.clever-cloud.com',
        user: 'u04mze2cqnnhwwyk',
        password: 'u04mze2cqnnhwwyk',
        database: 'brk12pv26q86rfdeiifn',
        port: '3306'
    })
}