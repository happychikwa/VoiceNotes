const mysql = require('mysql')
const winston = require('winston')
const logger = require('../log/logger')

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: '',
    password: '',
    database: 'AZNotes'
})

const connectToDB = () => {
        conn.connect((err) => {
        if(err){
            console.log("Connection Error: ", err.stack)
            logger.error(err.stack)
            return
        }
        console.log("connection thread", conn.threadId)
    })
}

module.exports = { connectToDB }