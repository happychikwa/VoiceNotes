const mysql = require('mysql')
const winston = require('winston')
const logger = require('../log/logger')

const databaseConnection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'AZNotes'
})

const conn = () => {
    databaseConnection.connect((err) => {
            if(err){
                console.log("Connection Error: ", err.stack)
                logger.error(err.stack)
                return null
            }
        console.log("connection thread", conn.threadId)
    })
}

module.exports = { databaseConnection }